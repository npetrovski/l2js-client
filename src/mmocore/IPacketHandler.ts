import MMOClient from "./MMOClient";
import ReceivablePacket from "./ReceivablePacket";
export default interface IPacketHandler<T extends MMOClient> {
  handlePacket(packetBytes: Uint8Array, client: T): ReceivablePacket<T>;
}
