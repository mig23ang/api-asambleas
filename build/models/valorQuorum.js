"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var valorSchema = new _mongoose.Schema({
  valor: {
    type: Number
  }
});

var _default = (0, _mongoose.model)("Valor", valorSchema);

exports.default = _default;