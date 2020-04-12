import L2ItemInstance from "../items/instance/L2ItemInstance";
import L2PcInstance from "../actor/instance/L2PcInstance";

export default abstract class ItemContainer {
  private _items!: Set<L2ItemInstance>;

  public getItems(): L2ItemInstance[] {
    return Array.from(this._items);
  }

  public getItemByItemId(itemId: number): L2ItemInstance | undefined {
    return Array.from(this._items).find((v) => v.getId() === itemId);
  }
  public getItemsByItemId(itemId: number): L2ItemInstance[] | undefined {
    return Array.from(this._items).filter((v) => v.getId() === itemId);
  }
  public getItemByObjectId(itemId: number): L2ItemInstance | undefined {
    return Array.from(this._items).find((v) => v.getObjectId() === itemId);
  }

  public AddItem(item: L2ItemInstance, actor: L2PcInstance): L2ItemInstance {
    // @TODO add item
    return item;
  }
}
