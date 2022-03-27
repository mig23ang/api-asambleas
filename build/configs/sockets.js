"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usuarios = exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../configs/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usuarios;
exports.usuarios = usuarios;

var _default = io => {
  io.on("connection", socket => {
    var message;
    socket.on('my message', (msg, res, req) => {
      var token = msg;

      try {
        var decoded = _jsonwebtoken.default.verify(token, _config.default.SECRET);

        var userId = decoded.id;
        console.log(userId, "aca el coeficiente del usuarios");
      } catch (error) {
        console.log(error);
      }

      return message;
    });
    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
    });
    exports.usuarios = usuarios = socket.adapter.sids.size;
    console.log(usuarios, "aca los usuarios");
    return usuarios;
  });
};

exports.default = _default;