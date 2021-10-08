import AbstractPacket from "./AbstractPacket";
import MMOClient from "./MMOClient";

export default abstract class IMMOClientMutator<
  C extends MMOClient,
  T extends AbstractPacket
> {
  Client: C;
  PacketType: string;
  constructor(c: C, x: new () => T) {
    this.Client = c;
    this.PacketType = x.name;
  }

  abstract update(packet: T): void;
}
