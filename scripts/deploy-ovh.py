"""Upload a validated static artifact using explicit FTPS (TLS, port 21).

No remote files are deleted. Configure secrets in GitHub, never in this file.
"""

import json
import os
from pathlib import Path, PurePosixPath
import ssl
import sys
from ftplib import FTP_TLS, error_perm


def required(name):
    value = os.environ.get(name, "")
    if not value or any(c in value for c in "\r\n\0"):
        raise ValueError(f"Missing or invalid {name}")
    return value


def main():
    root = Path(__file__).resolve().parent.parent / "ovh-dist"
    report = json.loads((root / "ovh-build-report.json").read_text(encoding="utf-8"))
    if report.get("deployable") is not True or report.get("missingAssets") != []:
        raise ValueError("Incomplete preview cannot be deployed")
    host = required("OVH_FTP_HOST")
    user = required("OVH_FTP_USER")
    password = required("OVH_FTP_PASSWORD")
    remote = required("OVH_FTP_DIR")
    # Explicit folder required: never default to the FTP account root.
    if remote in ("/", ".") or ".." in remote.split("/") or "\\" in remote:
        raise ValueError("OVH_FTP_DIR must name the site's document root, e.g. www")
    files = sorted(p for p in root.rglob("*") if p.is_file())
    if any(p.is_symlink() for p in root.rglob("*")):
        raise ValueError("Symlinks are not allowed")
    if sum(p.stat().st_size for p in files) > 80_000_000:
        raise ValueError("Artifact exceeds 80 MB")
    # Assets first; documents only after all their dependencies have uploaded.
    files.sort(key=lambda p: (p.suffix == ".html", p.name == "index.html", p.as_posix()))
    with FTP_TLS(context=ssl.create_default_context(), timeout=60) as ftp:
        ftp.connect(host, int(os.environ.get("OVH_FTP_PORT", "21")))
        ftp.login(user, password)
        ftp.prot_p()
        # Destination must already exist: a typo must not create another website root.
        ftp.cwd(remote)
        base = ftp.pwd()
        for source in files:
            relative = PurePosixPath(source.relative_to(root).as_posix())
            if any(c in str(relative) for c in "\r\n\0"):
                raise ValueError("Invalid file path")
            ftp.cwd(base)
            for part in relative.parts[:-1]:
                try:
                    ftp.cwd(part)
                except error_perm:
                    ftp.mkd(part)
                    ftp.cwd(part)
            temporary = relative.name + ".ovh-upload"
            with source.open("rb") as stream:
                ftp.storbinary("STOR " + temporary, stream)
            ftp.rename(temporary, relative.name)
            print("Uploaded " + str(relative))
    print("Upload finished. Check the domain, subpages, images and PDF downloads.")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        # Do not print raw connection errors: some servers repeat login details.
        print(f"OVH upload failed ({type(exc).__name__}). Check settings and the last uploaded file.", file=sys.stderr)
        sys.exit(1)
