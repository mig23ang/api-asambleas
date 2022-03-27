"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var preguntaSchema = new _mongoose.Schema({
  numero: {
    type: Number
  },
  text: {
    type: String
  },
  visible: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Pregunta", preguntaSchema);

exports.default = _default;