import AbstractPacketStream from "../../mmocore/AbstractPacketStream";
import MMOConfig, { PacketStreamConstructor } from "../../mmocore/MMOConfig";
/* nodejs:start */
import NetSocket from "./adapters/NetSocket";
/* nodejs:end */
import IStreamFactory from "./IStreamFactory";

export default class DefaultStreamFactory implements IStreamFactory {
  getStream(config: MMOConfig): AbstractPacketStream {
    let stream = config.Stream;
    if (typeof stream === "string") {
      switch (stream) {
        case "auto":
          /* nodejs:start */
          if (typeof process !== "undefined" && process.release.name === "node") {
            stream = NetSocket;
          }
          /* nodejs:end */
          break;
      }
    }
    if (typeof stream === "function") {
      return new stream(config);
    }

    if (typeof stream === "object") {
      return new (stream.constructor as PacketStreamConstructor)(config);
    }

    throw new Error("Cannot find appropriate PacketStream.");
  }
}
