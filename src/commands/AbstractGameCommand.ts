import ICommand from "./ICommand";
import MMOClient from "../mmocore/MMOClient";

export default abstract class AbstractGameCommand<T extends MMOClient> implements ICommand {
  private _client!: T;

  public get Client(): T {
    return this._client;
  }

  public set Client(value: T) {
    this._client = value;
  }

  constructor(client?: T) {
    if (client) {
      this._client = client;
    }
  }

  // @Override
  abstract execute(...args: any[]): void;
}
