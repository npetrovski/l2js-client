import InitMutator from "./InitMutator";
import GGAuthMutator from "./GGAuthMutator";
import LoginOkMutator from "./LoginOkMutator";
import PlayOkMutator from "./PlayOkMutator";
import ServerListMutator from "./ServerListMutator";

export default [
  [InitMutator.prototype, "Init"],
  [GGAuthMutator.prototype, "GGAuth"],
  [LoginOkMutator.prototype, "LoginOk"],
  [PlayOkMutator.prototype, "PlayOk"],
  [ServerListMutator.prototype, "ServerList"],
];
