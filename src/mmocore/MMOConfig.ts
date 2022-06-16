import AbstractPacketStream from "./AbstractPacketStream";

export default class MMOConfig {
  Username = "";
  Password = "";
  ServerId = 1;
  CharSlotIndex = 0;
  Stream: AbstractPacketStream | string | Function = "auto";
  Ip = "127.0.0.1";
  Port = 2106;
  InitialBlowfishKey?: Uint8Array;
}
