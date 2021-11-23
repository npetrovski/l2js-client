import RequestAuthGameGuard from "./RequestAuthGameGuard.json";
import RequestAuthLogin from "./RequestAuthLogin.json";
import RequestServerList from "./RequestServerList.json";
import RequestServerLogin from "./RequestServerLogin.json";

const h = (a: number[]) =>
  Array.from(a)
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

export default {
  ["RequestAuthGameGuard"]: {
    prefix: h(RequestAuthGameGuard.prefix.$default),
    schema: RequestAuthGameGuard
  },
  ["RequestAuthLogin"]: {
    prefix: h(RequestAuthLogin.prefix.$default),
    schema: RequestAuthLogin
  },
  ["RequestServerList"]: {
    prefix: h(RequestServerList.prefix.$default),
    schema: RequestServerList
  },
  ["RequestServerLogin"]: {
    prefix: h(RequestServerLogin.prefix.$default),
    schema: RequestServerLogin
  }
};
