import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import L2Item from "../../../entities/L2Item";

export default class ItemListMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    (packet.get("items") as Record<string, number>[]).forEach((data) => {
      const item = new L2Item();
      item.ObjectId = data.item_oid;
      item.Id = data.item;
      item.Count = data.quantity;
      item.IsEquipped = data.is_equipped === 1;
      item.EnchantLevel = data.enchant_level;
      item.AugmentBonus = data.augmentation;
      item.AttackElementVal = data.attack_element_power;

      item.DefAttFire = data.fire_defense;
      item.DefAttWater = data.water_defense;
      item.DefAttWind = data.wind_defense;
      item.DefAttEarth = data.earth_defense;
      item.DefAttHolly = data.holy_defense;
      item.DefAttUnholly = data.dark_defense;

      this.Client.InventoryItems.add(item);
    });
  }
}
