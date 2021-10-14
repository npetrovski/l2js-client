import Init from "../../incoming/login/Init";
import LoginOk from "../../incoming/login/LoginOk";
import PlayOk from "../../incoming/login/PlayOk";
import ServerList from "../../incoming/login/ServerList";
import InitPacketMutator from "./InitPacketMutator";
import LoginOkMutator from "./LoginOkMutator";
import PlayOkMutator from "./PlayOkMutator";
import ServerListMutator from "./ServerListMutator";

export default [
  [InitPacketMutator.prototype, Init],
  [ServerListMutator.prototype, ServerList],
  [PlayOkMutator.prototype, PlayOk],
  [LoginOkMutator.prototype, LoginOk]
];
