# Login (Auth) Protocol

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