# Browser client example

This example uses the browser bundle and the WebSocket-to-TCP proxy. It walks through four stages:

1. Account login
2. Server selection
3. Character selection
4. Live character, mob, and NPC view

Configure the login and advertised game-server targets in `examples/src/websocket-proxy.ts`, then run the proxy and web server in separate terminals:

```bash
cd examples
npm install
npm run prepare
npm run websocket-proxy
```

```bash
cd examples
npm run browser
```

The browser bundle and examples are rebuilt automatically, and your default browser opens at `http://127.0.0.1:3000/`. The generated `dist-browser/l2js-client.js` bundle is served at `/dist-browser/l2js-client.js`. The web server port can be changed with `L2_BROWSER_PORT`; the proxy port can be changed with `L2_WS_PROXY_PORT`. Set `L2_BROWSER_OPEN=false` to start the server without opening a browser.
