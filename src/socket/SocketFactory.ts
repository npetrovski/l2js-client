import IStream from "../mmocore/IStream";
import NetSocket from "./adapters/NetSocket";

export default class SocketFactory {
  static getSocketAdapter(stream: IStream | string): IStream {
    if (typeof stream === "object" && "connect" in (stream as any)) {
      return stream as IStream;
    }

    switch (stream) {
      case "auto":
        // is NodeJS
        if (typeof process !== "undefined" && process.release.name === "node") {
          return new NetSocket();
        }
        if (typeof navigator !== "undefined" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
          throw new Error("Not yet implemented");
          //return new FireFox();
        }
        break;
    }

    throw new Error("Cannot find appropriate socket adapter");
  }

  static async loadModule(mod: string) {
    return module;
  }
}
