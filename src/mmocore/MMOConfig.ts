import AbstractPacketStream from "@mmocore/AbstractPacketStream";

export type PacketStreamConstructor = new (config: MMOConfig) => AbstractPacketStream;

export default class MMOConfig {
  Username = "";
  Password = "";
  ServerId = 1;
  CharSlotIndex = 0;
  Stream: AbstractPacketStream | string | PacketStreamConstructor = "auto";
  Ip = "127.0.0.1";
  Port = 2106;
  InitialBlowfishKey?: Uint8Array;
}
