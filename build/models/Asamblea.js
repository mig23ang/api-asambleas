"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var asambleaSchema = new _mongoose.Schema({
  nombre: {
    type: String
  },
  description: {
    type: String
  },
  fecha: {
    type: String
  },
  fileName: {
    type: String
  },
  urlImg: {
    type: String
  },
  urlAsamblea: {
    type: String
  },
  activa: {
    type: Boolean
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Asamblea", asambleaSchema);

exports.default = _default;