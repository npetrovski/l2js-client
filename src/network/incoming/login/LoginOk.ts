import LoginClientPacket from "./LoginClientPacket";

export default class LoginOk extends LoginClientPacket {
  LoginOk1!: number;
  LoginOk2!: number;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.LoginOk1 = this.readD();
    this.LoginOk2 = this.readD();

    return true;
  }
}
