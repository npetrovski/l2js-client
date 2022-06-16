import AbstractPacketStream from "src/mmocore/AbstractPacketStream";
import MMOConfig from "src/mmocore/MMOConfig";

export default interface IStreamFactory {
  getStream(config: MMOConfig): AbstractPacketStream;
}
