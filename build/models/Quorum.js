"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var quorumSchema = new _mongoose.Schema({
  coeficiente: {
    type: _mongoose.SchemaTypes.Decimal128
  },
  apartment: {
    type: String
  },
  usuario: {
    type: String
  },
  idUser: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Quorum", quorumSchema);

exports.default = _default;