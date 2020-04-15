import GameClientPacket from "./GameClientPacket";

export default class Die extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _charObjId = this.readD();
    let _canTeleport = this.readD() == 1;

    let _hideOutId = this.readD();
    let _toCastle = this.readD();
    let _toSiegeHQ = this.readD();

    let _sweepable = this.readD() == 1; //blue glow
    let _staticRes = this.readD() == 1; //to Fixed

    let _toFortress = this.readD();

    if (_charObjId === this.Client.ActiveChar.getObjectId()) {
      this.Client.ActiveChar.setSelected(undefined);
      this.Client.ActiveChar.setIsDead(true);
      return true;
    }

    return true;
  }

  //@Override
  run(): void {}
}
