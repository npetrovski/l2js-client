import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import SendMacroList from "@network/incoming/game/xE8_SendMacroList";

export default class SendMacroListMutator extends IMMOClientMutator<GameClient, SendMacroList> {
  update(packet: SendMacroList): void {
    if (packet.Revision !== this.Client.MacroRevision) {
      this.Client.MacroList.clear();
      this.Client.MacroRevision = packet.Revision;
    }

    this.Client.MacroCount = packet.Count;
    if (packet.Macro) {
      this.Client.MacroList.removeById(packet.Macro.Id);
      this.Client.MacroList.add(packet.Macro);
    }

    this.fire("MacroList", {
      macro: packet.Macro,
      macros: Array.from(this.Client.MacroList),
      revision: packet.Revision,
      count: packet.Count,
      complete: this.Client.MacroList.size >= packet.Count,
    });
  }
}
