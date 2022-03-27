"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  // MONGODB_URI: "mongodb+srv://eskala:eskala@cluster0.1a38u.mongodb.net/ventus?retryWrites=true&w=majority",
  MONGODB_URI: "mongodb+srv://eskala:eskala@cluster0.1a38u.mongodb.net/refugio?retryWrites=true&w=majority",
  // MONGODB_URI: "mongodb://localhost/ventus",
  //MONGODB_URI: "mongodb://localhost/refugio",
  PORT: process.env.PORT || 4000,
  SECRET: 'asambleas-api'
};
exports.default = _default;