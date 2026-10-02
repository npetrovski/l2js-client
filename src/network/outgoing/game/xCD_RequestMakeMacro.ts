import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export type MacroCommand = Readonly<{ Type: number; D1: number; D2: number; Command: string }>;
export type Macro = Readonly<{
  Id: number;
  Name: string;
  Description: string;
  Acronym: string;
  Icon: number;
  Commands: readonly MacroCommand[];
  IsLocalOnly?: boolean;
}>;

export default class xCD_RequestMakeMacro extends GameServerPacket {
  constructor(private readonly macro: Macro) {
    super();
    if (macro.IsLocalOnly) {
      throw new Error("Local-only macros cannot be sent to the game server.");
    }
  }

  write(): void {
    this.writeC(0xcd);
    this.writeD(this.macro.Id);
    this.writeS(this.macro.Name);
    this.writeS(this.macro.Description);
    this.writeS(this.macro.Acronym);
    this.writeD(this.macro.Icon);
    this.writeC(this.macro.Commands.length);
    this.macro.Commands.forEach((command, index) => {
      this.writeC(index + 1);
      this.writeC(command.Type);
      this.writeD(command.D1);
      this.writeD(command.D2);
      this.writeS(command.Command.replaceAll(";", "%semic%").replaceAll(",", "%comma%"));
    });
  }
}
