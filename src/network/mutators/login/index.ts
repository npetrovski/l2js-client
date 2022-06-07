
import InitMutator from "./InitMutator";
import Init from "../../incoming/login/Init";
import LoginOkMutator from "./LoginOkMutator";
import LoginOk from "../../incoming/login/LoginOk";
import PlayOkMutator from "./PlayOkMutator";
import PlayOk from "../../incoming/login/PlayOk";
import ServerListMutator from "./ServerListMutator";
import ServerList from "../../incoming/login/ServerList";

export default [
  [InitMutator.prototype, Init],
  [LoginOkMutator.prototype, LoginOk],
  [PlayOkMutator.prototype, PlayOk],
  [ServerListMutator.prototype, ServerList],

];
  