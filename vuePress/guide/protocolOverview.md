# Protocol Overview

## Data Transfer

```txt
| Header |    Content    |
| A | B  |C|D|E|F|G|H|I|…|
```

All fields (header and content) are written in little-endian (a.k.a. Intel's byte order). This includes both numeric and string fields.

## Header

The only field in a packet's header is a 2-byte unsigned integer, specifying the packet's total size.

```txt
| Header |    Content    |
|  Size  |               |
| A | B  |C|D|E|F|G|H|I|…|
```

Thus, the largest packet size is 64K (65535 bytes), with 2 bytes reserved for size. The smallest valid packet is 2 bytes long and has no real meaning (as TCP makes keep-alive redundant).

## Content

The packet's content is what server emulators typically call 'a packet'. The content starts with a unique dynamic-size prefix identifying the type of the packet, followed by the packet's actual content.

```txt
| Header |      Content      |
|  Size  | Opcode(s) |  Data |
| A | B  |C|D|E|F|G|H|I|J|K|…|
```

## Opcodes

If we put protocol versions that predate Prelude BETA (336) aside, then each 'packet' (emulator-wise) starts with 1 to 3 opcodes, where the 1st opcode is a single byte, 2nd – two bytes and 3rd – four bytes.

```txt
| Header |                  Content                    |
|  Size  | Opcode1 |  Opcode2  |    Opcode3    |  Data |
| A | B  |    C    |  D  |  E  | F | G | H | I |J|K|L|…|
```

All transmitted data is enciphered. There are different protocol encryption schemes for `login` and for `game server` communications.