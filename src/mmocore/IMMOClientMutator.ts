import SerializablePacket from "./SerializablePacket";
import MMOClient from "./MMOClient";

export default abstract class IMMOClientMutator<C extends MMOClient, T extends SerializablePacket> {
  Client: C;
  PacketType: string;
  constructor(c: C, x: T) {
    this.Client = c;
    this.PacketType = x.Name;
  }

  abstract update(packet: T): void;
}
