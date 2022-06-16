import AbstractPacketStream from "../../mmocore/AbstractPacketStream";
import MMOConfig from "../../mmocore/MMOConfig";
import NetSocket from "./adapters/NetSocket";
import IStreamFactory from "./IStreamFactory";

export default class DefaultStreamFactory implements IStreamFactory {
  getStream(config: MMOConfig): AbstractPacketStream {
    let stream: AbstractPacketStream | string | Function = config.Stream;

    if (typeof stream === "string") {
      switch (stream) {
        case "auto":
          /* nodejs:start */
          if (typeof process !== "undefined" && process.release.name === "node") {
            stream = NetSocket.prototype;
          }
          /* nodejs:end */
          break;
      }
    }
    if (typeof stream === "function") {
      stream = (stream as any).prototype;
    }

    if (typeof stream === "object") {
      return <AbstractPacketStream>new (Object.create(stream).constructor)(config);
    }

    throw new Error("Cannot find appropriate PacketStream.");
  }
}
