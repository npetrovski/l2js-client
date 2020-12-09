import GameServerPacket from "./GameServerPacket";

export default class Say2 extends GameServerPacket {
  static readonly ALL: number = 0;
  static readonly SHOUT: number = 1; // !
  static readonly TELL: number = 2;
  static readonly PARTY: number = 3; // #
  static readonly CLAN: number = 4; // @
  static readonly GM: number = 5;
  static readonly PETITION_PLAYER: number = 6; // used for petition
  static readonly PETITION_GM: number = 7; // * used for petition
  static readonly TRADE: number = 8; // +
  static readonly ALLIANCE: number = 9; // $
  static readonly ANNOUNCEMENT: number = 10;
  static readonly BOAT: number = 11;
  static readonly L2FRIEND: number = 12;
  static readonly MSNCHAT: number = 13;
  static readonly PARTYMATCH_ROOM: number = 14;
  static readonly PARTYROOM_COMMANDER: number = 15; // (Yellow)
  static readonly PARTYROOM_ALL: number = 16; // (Red)
  static readonly HERO_VOICE: number = 17;
  static readonly CRITICAL_ANNOUNCE: number = 18;
  static readonly SCREEN_ANNOUNCE: number = 19;
  static readonly BATTLEFIELD: number = 20;
  static readonly MPCC_ROOM: number = 21;
  static readonly NPC_ALL: number = 22;
  static readonly NPC_SHOUT: number = 23;

  constructor(public type: number, public text: string, public target?: string) {
    super();
  }

  write(): void {
    this.writeC(0x49);
    this.writeS(this.text);
    this.writeD(this.type);
    if (this.target) {
      this.writeS(this.target);
    }
  }
}
