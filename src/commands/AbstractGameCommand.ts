import ICommand from "./ICommand";
import Logger from "../mmocore/Logger";
import LoginClient from "../network/LoginClient";
import GameClient from "../network/GameClient";

export default abstract class AbstractGameCommand implements ICommand {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  constructor(public LoginClient: LoginClient, public GameClient: GameClient) {}

  // @Override
  abstract execute(...args: any[]): void;
}
