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

  fire(type: string, data?: Record<string, unknown>) {
    this.Client.fire(type, data);
  }

  abstract update(packet: T): void;
}
