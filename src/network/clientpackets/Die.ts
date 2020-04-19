import GameClientPacket from "./GameClientPacket";

export default class Die extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjId = this.readD();
    const _canTeleport = this.readD() === 1;

    const _hideOutId = this.readD();
    const _toCastle = this.readD();
    const _toSiegeHQ = this.readD();

    const _sweepable = this.readD() === 1; // blue glow
    const _staticRes = this.readD() === 1; // to Fixed

    const _toFortress = this.readD();

    if (_charObjId === this.Client.ActiveChar.ObjectId) {
      this.Client.ActiveChar.Target = null;
      this.Client.ActiveChar.IsDead = true;
      return true;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
