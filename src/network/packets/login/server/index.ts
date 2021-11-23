import Init from "./Init.json";
import GGAuth from "./GGAuth.json";
import LoginOk from "./LoginOk.json";
import LoginFail from "./LoginFail.json";
import ServerList from "./ServerList.json";
import PlayFail from "./PlayFail.json";
import PlayOk from "./PlayOk.json";
import AccountKicked from "./AccountKicked.json";

const h = (a: number[]) =>
  Array.from(a)
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

export default {
  ["Init"]: { prefix: h(Init.prefix.$default), schema: Init },
  ["GGAuth"]: { prefix: h(GGAuth.prefix.$default), schema: GGAuth },
  ["LoginOk"]: { prefix: h(LoginOk.prefix.$default), schema: LoginOk },
  ["LoginFail"]: { prefix: h(LoginFail.prefix.$default), schema: LoginFail },
  ["ServerList"]: { prefix: h(ServerList.prefix.$default), schema: ServerList },
  ["PlayFail"]: { prefix: h(PlayFail.prefix.$default), schema: PlayFail },
  ["PlayOk"]: { prefix: h(PlayOk.prefix.$default), schema: PlayOk },
  ["AccountKicked"]: {
    prefix: h(AccountKicked.prefix.$default),
    schema: AccountKicked
  }
};
