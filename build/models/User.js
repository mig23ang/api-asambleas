"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  document: {
    type: Number
  },
  coeficiente: {
    type: _mongoose.SchemaTypes.Decimal128
  },
  apartment: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Role"
  }]
}, {
  timestamps: true,
  versionKey: false
});
/**
 userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}
 */

var _default = (0, _mongoose.model)("User", userSchema);

exports.default = _default;