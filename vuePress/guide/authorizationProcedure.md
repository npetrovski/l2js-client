# Lineage 2 Authorization Procedure

> Two servers - an `authorization server` and a `game server`. Each of them encrypts packets for the client in a slightly different way.

## General Information

- Packets are byte arrays
- Bytes arrive and are written in the reverse order to a TCP socket (see Little Endian)
- Packets consist of length (2 bytes), packet type (1 byte) and content (any number of bytes)
- The contents of the packet will be called the data transmitted in the packet (keys, session ID, etc.), excluding the length and type of packet
- The length of the packet is not encrypted and is not taken into account when calculating the checksum, since it is calculated after. The type of package, as well as the contents, is taken into account when calculating the checksum. The packet type, contents and checksum are encrypted together using the Blowfish algorithm.
- Packet Length - A number indicating the length of the entire packet. In other words, it also includes the length of the encrypted data (which consists of the contents and type of the packet, the checksum and is encrypted using the Blowfish algorithm) and two bytes for the number itself, indicating the length
- Blowfish is a block cipher algorithm that processes blocks of 8 bytes each, which means that the length of the contents of the packet together with the type and checksum must be a multiple of 8 (for this, the checksum is beaten from the contents of the packet with the required number of zeros)
- Please note that depending on whether you collect the package in advance in Little Endian order or later deploy the encryption and checksum calculation algorithms, respectively, it will be different.
  This may be important if, for example, the library selected for your programming language Blowfish can only encrypt bytes in direct order (Big Endian)

## The order of interaction of the authorization server with the client

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

## Sending packets by the authorization server.

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