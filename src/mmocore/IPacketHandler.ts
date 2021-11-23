import SerializablePacket from "./SerializablePacket";
export default interface IPacketHandler {
  handlePacket(packetBytes: Uint8Array): SerializablePacket | undefined;
}
