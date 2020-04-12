import GameClientPacket from "./GameClientPacket";
import SendablePacket from "../../mmocore/SendablePacket";
import GameClient from "../GameClient";
import RequestManorList from "../serverpackets/RequestManorList";
import RequestKeyMapping from "../serverpackets/RequestKeyMapping";
import EnterWorld from "../serverpackets/EnterWorld";
import L2PcInstance from "../../model/actor/instance/L2PcInstance";

export default class CharSelected extends GameClientPacket {
  private _activeChar: L2PcInstance = new L2PcInstance();

  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    this._activeChar.setName(this.readS());
    this._activeChar.setObjectId(this.readD());
    this._activeChar.setTitle(this.readS());
    let _sessionId = this.readD();
    this._activeChar.setClanId(this.readD());
    let _unkn1 = this.readD(); //??
    this._activeChar.getAppearance().setSex(1 === this.readD());
    let _race = this.readD();
    let _classId = this.readD();
    let _active1 = this.readD();
    this._activeChar.setX(this.readD());
    this._activeChar.setY(this.readD());
    this._activeChar.setZ(this.readD());

    this._activeChar.getStatus().setCurrentHp(this.readD());
    this._activeChar.getStatus().setCurrentMp(this.readD());

    //console.log("CharSelected: Not yet fully implemented.");
    this.Client.ActiveChar = this._activeChar;
    return true;
  }

  //@Override
  run(): void {
    var spk: SendablePacket<GameClient> = new RequestManorList();
    this.Client.sendPacket(spk);

    var spk: SendablePacket<GameClient> = new RequestKeyMapping();
    this.Client.sendPacket(spk);

    var spk: SendablePacket<GameClient> = new EnterWorld();
    this.Client.sendPacket(spk);
  }
}
