import { GamePacket } from "@network/PacketRegistry";
import L2Macro from "@entities/L2Macro";
import L2MacroCommand from "@entities/L2MacroCommand";
import { MacroType } from "@enums/MacroType";
import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xe8)
export default class xE8_SendMacroList extends GameClientPacket {
  Revision = 0;
  Count = 0;
  Macro?: L2Macro;

  readImpl(): boolean {
    this.readC();
    this.Revision = this.readD();
    this.readC();
    this.Count = this.readC();

    if (this.readC() !== 1) {return true;}

    const macro = new L2Macro();
    macro.Id = this.readD();
    macro.Name = this.readS();
    macro.Description = this.readS();
    macro.Acronym = this.readS();
    macro.Icon = this.readC();

    const commandCount = this.readC();
    for (let i = 0; i < commandCount; i++) {
      const command = new L2MacroCommand();
      command.Entry = this.readC();
      command.Type = this.readC() as MacroType;
      command.D1 = this.readD();
      command.D2 = this.readC();
      command.Command = this.readS().replaceAll("%semic%", ";").replaceAll("%comma%", ",");
      macro.Commands.push(command);
    }

    this.Macro = macro;
    return true;
  }
}
