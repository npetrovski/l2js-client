var Client = require("./dist/Client").Client;

process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
console.clear();

// /**
//  * Returns hexadecimal string
//  *
//  * @returns {string}
//  */
// hexString(data: Uint8Array): string {
//   return (
//     Array.from(Array.from(new Uint8Array(data)), (byte) => ("0" + (byte & 0xff).toString(16)).slice(-2)).join(" ") +
//     "\r\n"
//   );
// }

var l2client = new Client();
l2client
  .enter({
    username: "raid1141",
    password: "12345",
    loginServerIp: "127.0.0.1",
    //loginServerIp: "51.77.56.145",
    serverId: 1, //Bartz
    charSlotIndex: 0,
  })
  .on("packet:SocialAction", function (packet) {
    console.log("=======>", l2client.Me.getName());
  });

// 51.77.56.145
