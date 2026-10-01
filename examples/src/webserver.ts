import { spawn } from "node:child_process";
import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";

const host = "127.0.0.1";
const port = Number(process.env.L2_BROWSER_PORT ?? 3000);
const examplesRoot = path.resolve(__dirname, "..");
const browserRoot = path.join(examplesRoot, "browser");
const browserBundle = path.resolve(examplesRoot, "../dist-browser/l2js-client.js");
const url = `http://${host}:${port}/`;

const routes = new Map<string, { file: string; contentType: string }>([
  ["/", { file: path.join(browserRoot, "index.html"), contentType: "text/html; charset=utf-8" }],
  ["/index.html", { file: path.join(browserRoot, "index.html"), contentType: "text/html; charset=utf-8" }],
  ["/styles.css", { file: path.join(browserRoot, "styles.css"), contentType: "text/css; charset=utf-8" }],
  ["/app.js", { file: path.join(browserRoot, "app.js"), contentType: "text/javascript; charset=utf-8" }],
  ["/l2js-client.js", { file: browserBundle, contentType: "text/javascript; charset=utf-8" }],
]);

if (!existsSync(browserBundle)) {
  throw new Error("Browser bundle not found. Run `npm run build:browser` from the repository root first.");
}

const server = createServer((request, response) => {
  const requestUrl = new URL(request.url ?? "/", url);

  if (requestUrl.pathname === "/favicon.ico") {
    response.writeHead(204).end();
    return;
  }

  const route = routes.get(requestUrl.pathname);
  if (!route) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": route.contentType,
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(route.file).on("error", () => response.destroy()).pipe(response);
});

server.listen(port, host, () => {
  console.info(`L2JS browser example: ${url}`);
  if (process.env.L2_BROWSER_OPEN !== "false") {
    openBrowser(url);
  }
});

function openBrowser(target: string): void {
  const command =
    process.platform === "win32"
      ? { executable: "cmd.exe", args: ["/c", "start", "", target] }
      : process.platform === "darwin"
        ? { executable: "open", args: [target] }
        : { executable: "xdg-open", args: [target] };

  const child = spawn(command.executable, command.args, {
    detached: true,
    stdio: "ignore",
    windowsHide: true,
  });
  child.unref();
}
