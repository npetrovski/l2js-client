import IStream from "./IStream";

export default class MMOConfig {
  Username = "";
  Password = "";
  ServerId = 1;
  CharSlotIndex = 0;
  Stream: IStream | string = "auto";
  Ip = "127.0.0.1";
  Port = 2106;
}
