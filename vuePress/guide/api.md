# API

## Objects

```
L2Object
  |
  ├── L2Buff
  ├── L2Skill
  ├── L2Creature
  |     ├── L2PartyPet
  |     ├── L2Summon
  |     ├── L2Mob
  |     ├── L2Npc
  |     └── L2Character
  |           ├── L2User
  |           └── L2PartyMember
  ├── L2Mail
  ├── L2Recipe
  └── L2Item
        └── L2DroppedItem
```

## Commands

| Command             | Does what?                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| say                 | Send a general message                                                                          |
| shout               | Shout a message                                                                                 |
| tell                | Send a PM                                                                                       |
| sayToParty          | Send a party message                                                                            |
| sayToClan           | Send a clan message                                                                             |
| sayToTrade          | Send a trade message                                                                            |
| sayToAlly           | Send an ally message                                                                            |
| moveTo              | Move to location                                                                                |
| hit                 | Hit on target. Accepts L2Object object or ObjectId                                              |
| attack              | Attack a target. Accepts L2Object object or ObjectId                                            |
| cancelTarget        | Cancel the active target                                                                        |
| acceptJoinParty     | Accepts the requested party invite                                                              |
| declineJoinParty    | Declines the requested party invite                                                             |
| nextTarget          | Select next/closest attackable target                                                           |
| inventory           | Request for inventory item list                                                                 |
| useItem             | Use an item. Accepts L2Item object or ObjectId                                                  |
| requestDuel         | Request player a duel. If no char is provided, the command tries to request the selected target |
| autoShots           | Enable/disable auto-shots                                                                       |
| cancelBuff          | Cancel a buff                                                                                   |
| sitOrStand          | Sit or stand                                                                                    |
| validatePosition    | Sync position with server                                                                       |
| dwarvenCraftRecipes | Dwarven craft recipe book                                                                       |
| craft               | Craft an item                                                                                   |
| revive              | Revive to a location (Town, Castle, Clan Hall)                                                  |

## Events

| Event Type          | Event Data Type                                                                                            | When?                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| LoggedIn            | void                                                                                                       | logged in to Game server             |
| PacketReceived      | [EPacketReceived](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L6)       | a packet is received                 |
| PacketSent          | [EPacketSent](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L7)           | a packet is sent                     |
| PartyRequest        | [EPartyRequest](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L8)         | receive a party request              |
| Die                 | [EDie](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L13)                 | L2Creature is dead                   |
| TargetSelected      | [ETargetSelected](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L14)      | L2Creature is selected by L2Creature |
| MyTargetSelected    | [EMyTargetSelected](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L19)    | L2Creature is selected by L2User     |
| Attacked            | [EAttacked](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L20)            | L2User is beings attacked            |
| RequestedDuel       | [ERequestedDuel](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L21)       | receive a duel request               |
| StartMoving         | [EStartMoving](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L22)         | L2Creature starts moving             |
| StopMoving          | [EStopMoving](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L23)          | L2Creature stops moving              |
| CraftResult         | [ECraftResult](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L24)         | A result from crafting an item       |
| RecipeBook          | [ERecipeBook](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L25)          | A receipt book is received           |
| PartySmallWindow    | [EPartySmallWindow](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L30)    | The party small window updated       |
| PartyMemberPosition | [EPartyMemberPosition](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L35) | A party member position is updated   |
| CharInfo            | [ECharInfo](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L36)            | character info                       |
| Revive              | [ERevive](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L37)              | creature is revived                  |
| ConfirmDlg          | [EConfirmDlg](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L38)          | confirm dialog                       |
| SystemMessage       | [ESystemMessage](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L43)       | server system message                |
| CreatureSay         | [ECreatureSay](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L44)         | creature says                        |
| NpcHtmlMessage      | [ENpcHtmlMessage](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L49)      | receiving HTML from an NPC           |
| NpcQuestHtmlMessage | [ENpcQuestHtmlMessage](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L54) | receiving a quest HTML from an NPC   |
