import L2Object from "./L2Object";
import L2ObjectCollection from "./L2ObjectCollection";
import MMOClient from "../mmocore/MMOClient";

/**
 * Custom L2Object collection to attach event handlers
 * from items to the Client
 */
export default class L2ClientObjectCollection<
  T extends L2Object
> extends L2ObjectCollection<T> {
  constructor(private Client: MMOClient) {
    super();
  }

  add(value: T) {
    if (!this.has(value)) {
      value.onAll((event) => {
        this.Client.fire(event.type, event.data);
      });
    }
    return super.add(value);
  }
}