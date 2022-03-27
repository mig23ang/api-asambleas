"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var respuestaSchema = new _mongoose.Schema({
  si: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  propietario: {
    type: String,
    required: true
  },
  idUser: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  idPregunta: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Pregunta"
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Respuesta", respuestaSchema);

exports.default = _default;