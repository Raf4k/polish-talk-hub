import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";
import { createServerEntry } from "@tanstack/react-start/server-entry";

type StartHandler = ReturnType<typeof createStartHandler>;
type StartRequestOptions = Parameters<StartHandler>[1];

const startHandler: StartHandler = createStartHandler(defaultStreamHandler);

export default createServerEntry({
  fetch(request: Request, opts: StartRequestOptions): ReturnType<StartHandler> {
    return startHandler(request, opts);
  },
});
