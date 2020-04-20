import GameClientPacket from "./GameClientPacket";

export default class MyTargetSelected extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();
    const _color = this.readH();

    const _pad = this.readD();

    if (typeof this.Client.CreaturesList !== "undefined") {
      let npc = this.Client.CreaturesList.getEntryByObjectId(_objId);

      if (npc) {
        this.Client.ActiveChar.Target = npc;
      }
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
