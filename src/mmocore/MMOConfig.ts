import IStream from "./IStream";
import NetSocket from "./NetSocket";

type MMOConfigPartial = {
  [P in keyof MMOConfig]?: MMOConfig[P];
};

export default class MMOConfig {
  username!: string;
  password!: string;
  serverId: number = 1;
  charSlotIndex: number = 0;
  stream: IStream = new NetSocket();
  loginServerIp: string = "127.0.0.1";
  loginServerPort: number = 2106;

  assign(props: MMOConfigPartial): this {
    for (const key of Object.keys(props)) {
      (this as any)[key] = (props as any)[key];
    }
    return this;
  }
}
