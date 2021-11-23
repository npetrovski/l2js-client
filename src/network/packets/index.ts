import { default as loginClient } from "./login/client/index";
import { default as loginServer } from "./login/server/index";
import { default as gameHighFiveClient } from "./high_five/client/index";
import { default as gameHighFiveServer } from "./high_five/server/index";

export default {
  auth: {
    login: {
      client: loginClient,
      server: loginServer,
    },
  },
  game: {
    high_five: {
      client: gameHighFiveClient,
      server: gameHighFiveServer,
    },
  },
};
