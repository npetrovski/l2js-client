import GameServerPacket from "./GameServerPacket";

export default class RequestJoinParty extends GameServerPacket {

    constructor(public InviteName: string) {
        super();
    }

    write(): void {
        this.writeC(0x42);
        this.writeS(this.InviteName);
        this.writeD(0x00);
    }
}
