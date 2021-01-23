import L2ObjectCollection from "./L2ObjectCollection";
import L2PartyPet from "./L2PartyPet";

export default class L2PartyPetCollection extends L2ObjectCollection<L2PartyPet> {
  public GetItemByDisplayName(name: string): L2PartyPet | undefined {
    for (const item of this) {
      if (item.DisplayName === name) {
        return item;
      }
    }
  }
}
