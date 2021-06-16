# Game Protocol

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