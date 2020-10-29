import LoginClientPacket from "./LoginClientPacket";

export default class GGAuth extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _response = this.readD();

    const _zero1 = this.readD();
    const _zero2 = this.readD();
    const _zero3 = this.readD();
    const _zero4 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
