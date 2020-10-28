import IStream from "./IStream";


export default class MMOConfig {

  Username: string = "";
  Password: string = "";
  ServerId: number = 1;
  CharSlotIndex: number = 0;
  Stream: IStream | string = "auto";
  Ip: string = "127.0.0.1";
  Port: number = 2106;

}
