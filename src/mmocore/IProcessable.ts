import SerializablePacket from "./SerializablePacket";

export default interface IProcessable {
  process(raw: Uint8Array): Promise<SerializablePacket>;
}
