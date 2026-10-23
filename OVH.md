# Publikowanie strony na OVH

Projekt nadal edytujesz w Lovable. Standardowe `vite.config.ts`, `src/` i build
Lovable pozostają bez zmian. Osobny `vite.ovh.config.ts` generuje HTML każdej
podstrony; na OVH przesyłasz wyłącznie zawartość `ovh-dist/`. Serwer Node.js
i baza danych nie są potrzebne do obsługi obecnych podstron.

## 1. Uzupełnij materiały

Pliki `src/assets/*.asset.json` opisują zasoby Lovable, ale nie zawierają zdjęć
ani PDF-ów. Build sprawdza wszystkie takie opisy. Są dwie obsługiwane metody:

- Dodaj oryginały do `public/media/`, z nazwami `original_filename` z opisów.
  Podczas budowania tylko wersji OVH odnośniki zostaną zamienione na `/media/...`.
- Aby zachować zasoby na CDN, wpisz do `ovh/media-urls.json` mapę nazw na pełne,
  publiczne adresy HTTPS. Build sprawdzi odpowiedź i typ pliku. Nie wpisuj
  adresów podglądu wymagających zalogowania ani linków wygasających.

Przykład mapy CDN (zastąp własnym adresem):

```json
{
  "logo-fundacji.png": "https://twoj-cdn.example/media/logo-fundacji.png"
}
```

Pierwsza metoda jest lokalnym wariantem dla OVH; źródłowe wskaźniki CDN w projekcie
Lovable pozostają zachowane. Nowe pliki dodane w Lovable również wymagają pełnego
adresu CDN lub oryginału w repozytorium. Kontrola wychwyci nowy brak.

Lista braków pojawia się w logu i `.ovh/missing-assets.json`. Uwaga: nazwy dwóch
statutów to `statut-fundacji-przez-pryzmat-dzwieku-2024.pdf` oraz
`statut-fundacji-przez-pryzmat-dzwieku.pdf`, zgodnie z `original_filename`.

## 2. Zbuduj i sprawdź paczkę

Materiały wyeksportowane z Lovable są już w `public/media/`. Okładka
`terapiosenki-okladka.png` zawiera dane WebP; nazwa oryginału pozostaje zachowana,
a dołączony `.htaccess` ustawia dla niej `Content-Type: image/webp`.
Oba pliki statutu są identyczne bajt po bajcie; pozostawiono obie nazwy,
aby zachować zgodność ze wskaźnikami zasobów.

Wymagane Node.js 24 i Bun 1.3.14:

```sh
bun install --frozen-lockfile
bun run build:ovh
```

GitHub Actions przed instalacją uruchamia `node scripts/prepare-ovh-install.mjs`.
Skrypt w roboczej kopii `bun.lock` zamienia adresy pobierania z serwera pakietów
Lovable na publiczny npm. Wersje, zależności i sumy kontrolne pozostają zachowane;
zmodyfikowany lockfile nie jest zapisywany do GitHuba ani synchronizowany z Lovable.
Możesz uruchomić ten sam krok lokalnie, jeśli serwer Lovable zwraca błąd 429.

Niekompletny test (bez zgody na publikację):

```sh
bun run build:ovh:preview
```

Paczka to `ovh-dist/`, raport to `ovh-dist/ovh-build-report.json`. Sprawdzamy
wyrenderowaną treść każdej statycznej trasy, brak wskaźników Lovable w paczce
produkcyjnej oraz limit 80 MB, zostawiający margines na hostingu 100 MB.
Wersja testowa może mieć brakujące obrazy i dokumenty; raport oznacza ją jako
`deployable: false`. Skrypt wysyłania odrzuca taki raport.

Test podstron lokalnie: uruchom dowolny serwer plików z katalogu `ovh-dist`,
np. `python -m http.server 8080 --directory ovh-dist`, i otwórz
`http://localhost:8080/`, `/o-nas/`, `/kontakt/` i pozostałe podstrony.
Lokalny serwer Pythona nie interpretuje `.htaccess`; jego obsługę i HTTPS
sprawdź po wdrożeniu na OVH.

## 3. Konfiguracja GitHub Actions i OVH

Każdy push do `ovh-deploy` buduje paczkę testową dostępną w Actions → dany run →
Artifacts → `ovh-site`. Nie wysyła jej na OVH.

GitHub pokazuje przycisk `Run workflow` dopiero, gdy workflow istnieje również
na domyślnej gałęzi (`main`). Jednorazowo skopiuj **tylko** plik
`.github/workflows/ovh.yml` na `main`. Jego warunki nie uruchamiają publikacji
z main i nie zmieniają sposobu budowania w Lovable. Potem w Actions wybierasz
workflow `OVH - build and publish`, `Run workflow`, gałąź `ovh-deploy`.
Bez zaznaczenia `publish` uruchamia się tylko test; zaznaczenie uruchamia
ścisłe sprawdzenie materiałów i wysyłkę.

W GitHub → Settings → Environments utwórz `ovh-production`. Dodaj w nim secrets:

| Secret             | Wartość                                                                    |
| ------------------ | -------------------------------------------------------------------------- |
| `OVH_FTP_HOST`     | Serwer FTP z OVH → Hosting → FTP–SSH, np. `ftp.cluster129.hosting.ovh.net` |
| `OVH_FTP_USER`     | Login FTP                                                                  |
| `OVH_FTP_PASSWORD` | Hasło FTP                                                                  |

Dodaj również zmienne środowiska (Variables):

| Variable       | Wartość                                                                    |
| -------------- | -------------------------------------------------------------------------- |
| `OVH_FTP_DIR`  | Istniejący folder strony, zwykle `www`; potwierdź w zakładce Multisite OVH |
| `OVH_FTP_PORT` | Port FTPS, domyślnie `21`                                                  |

Wysyłka używa jawnego FTPS z weryfikacją certyfikatu i szyfrowaniem danych.
Jeśli serwer nie obsługuje TLS, włącz odpowiednią opcję SFTP/SSH w panelu OVH
zgodnie z ich dokumentacją; nie wyłączaj walidacji certyfikatu.

Przed pierwszym wdrożeniem pobierz kopię istniejącej zawartości katalogu strony.
Pliki o tych samych nazwach zostaną zastąpione; pozostałe pozostają na serwerze.
Podczas transferu najpierw trafiają zasoby, potem HTML. Pojedyncze pliki są
wysyłane pod tymczasową nazwą i dopiero po transferze zmieniają nazwę. Cała
publikacja nie jest atomowa: przerwanie może pozostawić mieszaną wersję.
Nie ma automatycznego usuwania starych plików; po wielu publikacjach usuń
nieużywane zasoby dopiero po wykonaniu kopii i upewnieniu się, że nie są potrzebne.

Po pierwszej wysyłce sprawdź powiązanie domeny z folderem w Multisite, SSL,
bezpośrednie wejścia na podstrony, menu, zdjęcia, PDF-y i zachowanie 404.
Skrypt nie zmienia DNS ani poczty. Nie przesyłaj hasła FTP na czacie.

## 4. Kolejne edycje w Lovable

Lovable synchronizuje gałąź wybraną w jego ustawieniach Git. Jeśli edytuje `main`,
przed publikacją scal zmiany z `main` do `ovh-deploy` (np. przez pull request).
Nie nadpisuj historii ani nie używaj force-push. Samo istnienie gałęzi wdrożeniowej
nie powoduje, że nowe zmiany z `main` automatycznie się na niej pojawią.
Następnie sprawdź test w Actions i uruchom ręczną publikację z `ovh-deploy`.

Po dodaniu funkcji serwerowych, logowania lub bazy danych trzeba ponownie
ocenić możliwość hostowania całej aplikacji jako plików statycznych.

Dokumentacja: [TanStack prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering),
[OVH FTP](https://docs.ovhcloud.com/en/guides/web-cloud/web-hosting/ftp-filezilla-user-guide).
