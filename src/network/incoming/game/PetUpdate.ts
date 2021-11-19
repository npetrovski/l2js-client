import GameClientPacket from "./GameClientPacket";

export default class PetUpdate extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _petType = this.readD();
    const _petObjId = this.readD();

    const [_x, _y, _z] = this.readLoc();
    const _petTitle = this.readS();

    const curFed = this.readD();
    const maxFed = this.readD();

    const curHp = this.readD();
    const maxHp = this.readD();

    const curMp = this.readD();
    const maxMp = this.readD();

    const petLevel = this.readD();
    
    const petXp = this.readQ();
    const xpForThisLvl = this.readQ();
    const xpForNextLvl = this.readQ();

    return true;
  }
}
