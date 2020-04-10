import MMOClient from "../mmocore/MMOClient";

export default abstract class AbstractPacket<T extends MMOClient<any>> {
  _client!: T;

  get Client(): T {
    return this._client;
  }

  set Client(client: T) {
    this._client = client;
  }

  pow2(n: number): number {
    if (n >= 0 && n < 31) {
      return 1 << n;
    }
    return Math.pow(2, n);
  }
}
