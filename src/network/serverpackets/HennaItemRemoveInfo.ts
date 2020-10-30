import GameClientPacket from "./GameClientPacket";

export default class HennaItemRemoveInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _dyeId = this.readD(); // dye Id
    const _dyeItemId = this.readD(); // item Id of the dye
    const _cancelCount = this.readQ(); // total amount of dye require
    const _cancelFee = this.readQ(); // total amount of Adena require to remove symbol
    const _isAllowed = this.readD(); // // able to remove or not

    const _adena = this.readQ();

    const _int = this.readD();
    const _equipInt = this.readC();
    const _str = this.readD();
    const _equipStr = this.readC();
    const _con = this.readD();
    const _equipCon = this.readC();
    const _men = this.readD();
    const _equipMen = this.readC();
    const _dex = this.readD();
    const _equipDex = this.readC();
    const _wit = this.readD();
    const _equipWit = this.readC();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
