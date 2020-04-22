# Lineage 2 JavaScript Client

This project was made while experimenting with TypeScript and es6. The idea is to have a NCSoft Lineage 2 client library, that allows other projects to build L2 client functionalities (like bots, game helpers, etc.) on top of it. It can be also used as a framework for building Lineage2 automated tests for L2 private servers.

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

## API

///@todo

## Contributing

I welcome contributions of all types, as long as you enjoy it and do it for fun :-) !

## To-do List

- complete the library with all packet handlers
- remove dependency for node-rsa, ideally the library should be able to be executed client-side (by a browser), excluding the part with the socket connection
