import GameClientPacket from "./GameClientPacket";

export default class SocialAction extends GameClientPacket {
  private _charObjId: number = 0;

  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    this._charObjId = this.readD();
    let _actionId = this.readD();

    return true;
  }

  //@Override
  run(): void {
    //var spk: SendablePacket<GameClient> = new Say2(Say2.ALL, "Hello " + this._charObjId.toString(16));
    //this.Client.sendPacket(spk);
  }
}
