import MMOClient from "@mmocore/MMOClient";
import ReceivablePacket from "@mmocore/ReceivablePacket";
export default interface IPacketHandler<T extends MMOClient> {
  handlePacket(packetBytes: Uint8Array): ReceivablePacket;
}
