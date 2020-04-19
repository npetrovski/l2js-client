import GameClientPacket from "./GameClientPacket";

export default class MyTargetSelected extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _objId = this.readD();
    let _color = this.readH();

    let _pad = this.readD();

    if (typeof this.Client.CreaturesList !== "undefined") {
      var npc = this.Client.CreaturesList.getEntryByObjectId(_objId);

      if (npc) {
        this.Client.ActiveChar.Target = npc;
      }
    }

    return true;
  }

  //@Override
  run(): void {
    //
  }
}
