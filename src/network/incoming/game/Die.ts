import GameClientPacket from "./GameClientPacket";

export default class Die extends GameClientPacket {
  CharObjId!: number;
  Sweepable!: boolean;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.CharObjId = this.readD();
    const _canTeleport = this.readD() === 1;

    const _hideOutId = this.readD();
    const _toCastle = this.readD();
    const _toSiegeHQ = this.readD();

    this.Sweepable = this.readD() === 1; // blue glow
    const _staticRes = this.readD() === 1; // to Fixed

    return true;
  }
}
