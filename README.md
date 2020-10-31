# Lineage 2 JavaScript Client

This project was made while experimenting with TypeScript and es6. The idea is to have an NCSoft Lineage 2 client library, that allows other projects to build L2 client functionalities (like bots, game helpers, etc.) on top of it. It can be also used as a framework for building Lineage2 automated tests for L2 private servers.

> _Table Of Contents_
>
> - [Supported L2 Chronicles](#supported-l2-chronicles)
> - [Installation](#installation)
> - [Examples](#examples)
>   - [Logging in](#logging-in)
>   - [Chat](#chat)
>   - [Move to location](#move-to-location)
>   - [Fight back](#fight-back)
>   - [Follow a character](#follow-a-character)
>   - [Simple bot (auto-target and auto-close-combat-hit)](#simple-bot-auto-target-and-auto-close-combat-hit)
>   - [Add a custom command](#add-a-custom-command)
>   - [Simple craft (Soulshot S-Grade)](#simple-craft-soulshot-s-grade)
> - [API](#api)
>   - [Objects](#objects)
>   - [Commands](#commands)
>   - [Events](#events)
> - [Lineage 2 Authorization Procedure](#lineage-2-authorization-procedure)
>   - [General Information](#general-information)
>   - [The order of interaction of the authorization server with the client](#the-order-of-interaction-of-the-authorization-server-with-the-client)
>   - [Sending packets by the authorization server.](#sending-packets-by-the-authorization-server)
> - [Protocol Overview](#protocol-overview)
>   - [Data Transfer](#data-transfer)
>   - [Header](#header)
>   - [Content](#content)
>   - [Opcodes](#opcodes)
> - [Login (Auth) Protocol](#login-auth-protocol)
> - [Game Protocol](#game-protocol)
> - [To-Do List](#to-do-list)
> - [Contributing](#contributing)

## Supported L2 Chronicles

For now the library supports only Lineage 2 HighFive:

- protocol version 267 - HighFive
- protocol version 268 - HighFive Update 1
- protocol version 271 - HighFive Update 2
- protocol version 273 - HighFive Update 3

If you are interested in other L2 versions, please leave a comment / open an issue.

## Installation

```js
npm install l2js-client
```

///@todo

## Examples

### Logging in

```ts
import Client from "l2js-client/Client";

const l2 = new Client();
l2.enter({
  /* required */ Username: "admin",
  /* required */ Password: "admin",
  /* required */ Ip: "127.0.0.1",
  /* optional */ ServerId: 1, //Bartz
  /* optional */ CharSlotIndex: 0,
}); // return a Promise, a.k.a. you can use .then() after "enter()"
```

### Chat

```ts
l2.on("LoggedIn", () => {
  l2.say("Hello from " + l2.Me.Name);
  l2.shout("Hello world !!!");
  l2.tell("hi there", "myMainCharName");
  l2.sayToParty("Hello party");
  l2.sayToClan("Hello clan");
  l2.sayToTrade("Hello traders");
  l2.sayToAlly("Hello ppls");
});
```

### Move to location

```ts
l2.on("LoggedIn", () => {
  let x = 50 + Math.floor(Math.random() * 50) + l2.Me.X;
  let y = 50 + Math.floor(Math.random() * 50) + l2.Me.Y;
  let z = l2.Me.Z;
  l2.moveTo(x, y, z);
});
```

### Fight back

```ts
import { EAttacked } from "l2js-client/events/EventTypes";

l2.on("Attacked", (e: EAttacked) => {
  if (Array.from(e.data.subjects).indexOf(l2.Me.ObjectId) !== -1) {
    l2.hit(e.data.object);
    l2.hit(e.data.object);
  }
});
```

### Follow a character

```ts
import { EStartMoving } from "l2js-client/events/EventTypes";

l2.on("StartMoving", (e: EStartMoving) => {
  if (e.data.creature.Name === "Adm") {
    l2.moveTo(e.data.creature.Dx, e.data.creature.Dy, e.data.creature.Dz);
  }
});
```

### Simple bot (auto-target and auto-close-combat-hit)

```ts
import L2Creature from "l2js-client/entities/L2Creature";
import { ShotsType } from "l2js-client/enums/ShotsType";
import { EDie, EMyTargetSelected, EPartyRequest, EAttacked } from "l2js-client/events/EventTypes";

l2.on("LoggedIn", () => {
  l2.cancelTarget();
  l2.validatePosition();
  l2.moveTo(l2.Me.X + 1, l2.Me.Y + 1, l2.Me.Z);
  l2.autoShots(ShotsType.SSS, true); // enable SSS

  setInterval(() => {
    if (l2.DroppedItems.size > 0) {
      l2.hit(Array.from(l2.DroppedItems)[0]);
    } else if (!l2.Me.Target || l2.Me.Target.ObjectId === l2.Me.ObjectId) {
      let creature: L2Creature | undefined = l2.nextTarget();
      if (creature instanceof L2Creature) {
        l2.hit(creature);
      }
    }
  }, 500);
})
  .on("MyTargetSelected", (e: EMyTargetSelected) => {
    if (l2.Me.Target) {
      l2.hit(l2.Me.Target);
      l2.attack(l2.Me.Target);
    }
  })
  .on("Die", (e: EDie) => {
    if (l2.Me.Target && e.data.creature.ObjectId === l2.Me.Target.ObjectId) {
      l2.cancelTarget();
      l2.CreaturesList.forEach((c) => {
        c.calculateDistance(l2.Me);
      });
    }
  })
  .on("PartyRequest", (e: EPartyRequest) => {
    l2.acceptJoinParty();
  })
  .on("Attacked", (e: EAttacked) => {
    if (Array.from(e.data.subjects).indexOf(l2.Me.ObjectId) !== -1) {
      l2.hit(e.data.object);
      l2.hit(e.data.object);
    }
  });
```

### Add a custom command

```ts
import AbstractGameCommand from "l2js-client/commands/AbstractGameCommand";
import GameClient from "l2js-client/network/GameClient";

l2.registerCommand("sayHello", {
  execute: function (): void {
    console.log("Hello. I am  " + this.Client.ActiveChar.Name);
  },
} as AbstractGameCommand<GameClient>);

l2.on("LoggedIn", () => {
  (l2 as any).sayHello();
});
```

### Simple craft (Soulshot S-Grade)

```ts
import { ERecipeBook, ECraftResult } from "l2js-client/events/EventTypes";
import L2Recipe from "l2js-client/entities/L2Recipe";

const RECIPE_SSS = 0x18;
var craftIntervalId: ReturnType<typeof setInterval>;

l2.on("LoggedIn", () => {
  l2.dwarvenCraftRecipes();
})
  .on("RecipeBook", (e: ERecipeBook) => {
    if (e.data.isDwarven) {
      let recipeSSS = Array.from(l2.DwarfRecipeBook).find((r: L2Recipe) => r.Id === RECIPE_SSS);
      if (recipeSSS) {
        clearInterval(craftIntervalId);

        craftIntervalId = setInterval(() => {
          l2.craft(RECIPE_SSS);
        }, 500);
      }
    }
  })
  .on("CraftResult", (e: ECraftResult) => {
    if (!e.data.success) {
      clearInterval(craftIntervalId);
    }
  });
```

## API

### Objects

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

### Commands

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

### Events

| Event Type       | Event Data Type                                                                                         | When?                                |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| LoggedIn         | void                                                                                                    | logged in to Game server             |
| PacketReceived   | [EPacketReceived](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L6)    | a packet is received                 |
| PacketSent       | [EPacketSent](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L7)        | a packet is sent                     |
| PartyRequest     | [EPartyRequest](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L8)      | receive a party request              |
| Die              | [EDie](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L13)              | L2Creature is dead                   |
| TargetSelected   | [ETargetSelected](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L14)   | L2Creature is selected by L2Creature |
| MyTargetSelected | [EMyTargetSelected](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L19) | L2Creature is selected by L2User     |
| Attacked         | [EAttacked](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L20)         | L2User is beings attacked            |
| RequestedDuel    | [ERequestedDuel](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L21)    | receive a duel request               |
| StartMoving      | [EStartMoving](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L22)      | L2Creature starts moving             |
| StopMoving       | [EStopMoving](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L23)       | L2Creature stops moving              |
| CraftResult      | [ECraftResult](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L24)      | A result from crafting an item       |
| RecipeBook       | [ERecipeBook](https://github.com/npetrovski/l2js-client/blob/master/src/events/EventTypes.ts#L25)       | A receipt book is received           |

///@todo

## Lineage 2 Authorization Procedure

> Two servers - an `authorization server` and a `game server`. Each of them encrypts packets for the client in a slightly different way.

### General Information

- Packets are byte arrays
- Bytes arrive and are written in the reverse order to a TCP socket (see Little Endian)
- Packets consist of length (2 bytes), packet type (1 byte) and content (any number of bytes)
- The contents of the packet will be called the data transmitted in the packet (keys, session ID, etc.), excluding the length and type of packet
- The length of the packet is not encrypted and is not taken into account when calculating the checksum, since it is calculated after. The type of package, as well as the contents, is taken into account when calculating the checksum. The packet type, contents and checksum are encrypted together using the Blowfish algorithm.
- Packet Length - A number indicating the length of the entire packet. In other words, it also includes the length of the encrypted data (which consists of the contents and type of the packet, the checksum and is encrypted using the Blowfish algorithm) and two bytes for the number itself, indicating the length
- Blowfish is a block cipher algorithm that processes blocks of 8 bytes each, which means that the length of the contents of the packet together with the type and checksum must be a multiple of 8 (for this, the checksum is beaten from the contents of the packet with the required number of zeros)
- Please note that depending on whether you collect the package in advance in Little Endian order or later deploy the encryption and checksum calculation algorithms, respectively, it will be different.
  This may be important if, for example, the library selected for your programming language Blowfish can only encrypt bytes in direct order (Big Endian)

### The order of interaction of the authorization server with the client

For convenience, I'll denote by the prefix `S` packets sent by the server, and `C` - sent by the client, because they can have the same ID, but different contents

> S / 0x00 (Init) packet is not signed by the checksum, all other packets are signed by

> S / 0x00 (Init) is encrypted using the XOR algorithm, all other packets are not encrypted.

All packets are encrypted using the Blowfish algorithm with a key randomly generated for each connection and sent in the S / 0x00 (Init) packet, except for the S / 0x00 (Init) packet which is encrypted with a key invented by the developers of the game (wired in the client)

Encryption using the Blowfish algorithm is always the last, i.e.:

```meta
# S / 0x00 packet encryption (Init)
data = xor.encrypt (data)
data = blowfish.encrypt (data, STATIC_KEY)

# Encryption of any other package
data = checksum.sign (data)
data = blowfish.encrypt (data, SESSION_KEY)
```

Decryption always goes the same:

```meta
# Decryption of any incoming packet
data = blowfish.decrypt (data, SESSION_KEY)
data = checksum.verify (data)
```

The contents of the C / 0x00 packet (RequestAuthLogin) comes with the RSA encrypted algorithm using the key that the server sends in the S / 0x00 (Init) packet. Only content is encrypted, but not the length or type of the packet. The packet itself is encrypted as usual. The content is encrypted additionally, as contains login and password

Interaction procedure for successful authorization:

1. _User initializes the client with login and password_
2. Client connects to a server (default socket port 2106)
3. Server sends `S / 0x00` packet ([Init](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/Init.ts))
4. Client sends `C / 0x07` packet ([AuthGameGuard](https://github.com/npetrovski/l2js-client/blob/master/src/network/clientpackets/AuthGameGuard.ts))
5. Server sends `S / 0x0b` packet ([GGAuth](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/GGAuth.ts))
6. Client sends username and password in `C / 0x00` packet ([RequestAuthLogin](https://github.com/npetrovski/l2js-client/blob/master/src/network/clientpackets/RequestAuthLogin.ts))
7. The server checks the username and password and sends `S / 0x03` ([LoginOk](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/LoginOk.ts))
8. The client requests a list of game servers with the `C / 0x05` package ([RequestServerList](https://github.com/npetrovski/l2js-client/blob/master/src/network/clientpackets/RequestServerList.ts))
9. The server sends a list of game servers in the `S / 0x04` package ([ServerList](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/ServerList.ts))
10. The client selects a server from the list, and sends a `C / 0x02` packet ([RequestServerLogin](https://github.com/npetrovski/l2js-client/blob/master/src/network/clientpackets/RequestServerLogin.ts))
11. Server sends packet `S / 0x07` ([PlayOK](https://github.com/npetrovski/l2js-client/blob/master/src/network/serverpackets/PlayOk.ts))

Next, the client disconnects from the authorization server and connects to the game server.

### Sending packets by the authorization server.

Packets are written as an array of bytes:

1. Write 1 byte of packet type, for example, 0x00
2. We form and add the contents of the package (session ID, server version, keys, zero-byte of Blowfish key end, etc.)
3. We calculate the checksum for the current byte array
4. We achieve the length of the current byte array with zero bytes up to a multiple of 8
5. Add the checksum to the array
6. We encrypt the current byte array using the Blowfish algorithm
7. Calculate the length of the resulting array
8. We add to the value of length 2 to take into account the two bytes of length themselves
9. Add the length to the beginning of the array

_From a TCP socket, bytes should be read in reverse order._

## Protocol Overview

### Data Transfer

```txt
| Header |    Content    |
| A | B  |C|D|E|F|G|H|I|…|
```

All fields (header and content) are written in little-endian (a.k.a. Intel's byte order). This includes both numeric and string fields.

### Header

The only field in a packet's header is a 2-byte unsigned integer, specifying the packet's total size.

```txt
| Header |    Content    |
|  Size  |               |
| A | B  |C|D|E|F|G|H|I|…|
```

Thus, the largest packet size is 64K (65535 bytes), with 2 bytes reserved for size. The smallest valid packet is 2 bytes long and has no real meaning (as TCP makes keep-alive redundant).

### Content

The packet's content is what server emulators typically call 'a packet'. The content starts with a unique dynamic-size prefix identifying the type of the packet, followed by the packet's actual content.

```txt
| Header |      Content      |
|  Size  | Opcode(s) |  Data |
| A | B  |C|D|E|F|G|H|I|J|K|…|
```

### Opcodes

If we put protocol versions that predate Prelude BETA (336) aside, then each 'packet' (emulator-wise) starts with 1 to 3 opcodes, where the 1st opcode is a single byte, 2nd – two bytes and 3rd – four bytes.

```txt
| Header |                  Content                    |
|  Size  | Opcode1 |  Opcode2  |    Opcode3    |  Data |
| A | B  |    C    |  D  |  E  | F | G | H | I |J|K|L|…|
```

All transmitted data is enciphered. There are different protocol encryption schemes for `login` and for `game server` communications.

## Login (Auth) Protocol

All login server/client packets are encrypted using a modified blowfish scheme. Each Blowfish encrypted block is 64 bits long. Once a client connects, the server initiates communications by sending an initialization packet. This packet is encrypted with a constant blowfish key (which can be found in the client). What is important, this packet contains the blowfish key used for further communications.

First packet from the server:

    1. Write packet data
    2. Extend packet size to a multiple of 8
    3. Encipher packet data by a 32-bit XOR key
    4. Append 8 bytes
    5. Store XOR key in the first 4 appended bytes
    6. Encipher packet using a blowfish key known in advance
    7. Send packet

Other packets from the server:

    1. Write packet data
    2. Extend packet size to a multiple of 8
    3. Calculate packet checksum (simple/fast, XOR-based scheme)
    4. Append 8 bytes
    5. Store checksum in the first 4 appended bytes
    6. Encipher packet using the blowfish key sent in the first packet
    7. Send packet

Packets from the client:

    1. Write packet data
    2. Extend packet size to a multiple of 8
    3. Calculate packet checksum (simple/fast, XOR-based scheme)
    4. Append 16 bytes
    5. Store checksum in the first 4 appended bytes
    6. Encipher packet using the blowfish key received from the server
    7. Send packet

## Game Protocol

The same encryption scheme (with only minor differences) was used both pre- and post-C4, so it was essentially unchanged.

All game server/client packets are enciphered using an XOR-based scheme.

The initial key is made of two parts: a dynamic part given by the game server and a pre-shared part known to the game client (and server) in advance. Legacy clients had two pre-shared key parts. The one to be selected was determined by evaluating the dynamic key part sent by the server.

During cipher operations, the last 4 bytes (DWORD) of the dynamic key part is incremented by the amount of bytes processed by each operation.

Once a client connects, it will immediately send an unenciphered protocol version packet. The server will respond with an unenciphered packet specifying whether the protocol is supported and disclose the mutable key part. The server, if applicable, will also identify itself and send an initial opcode obfuscation key for the client. If the opcode obfuscation key is not 0, the client will then shuffle most of its 1st and 2nd opcodes.

The CM obfuscation key also changes each time a character is logged in.

Except for the first packet, each game server packet is transmitted by taking the following steps:

    1. Write packet data
    2. Encipher payload using XOR with both parts of the key
    3. Update the mutable part of the key
    4. Send packet

Except for the first packet, each game client packet is transmitted by taking the following steps:

    1. Write packet data
    2. Obfuscate opcode(s)
    3. Encipher payload using XOR with both parts of the key
    4. Update the mutable part of the key
    5. Send packet Game server/client packets are not padded.

## To-Do List

- complete the library with all packet handlers

## Contributing

I welcome contributions of all types, as long as you enjoy it and do it for fun :-) !
