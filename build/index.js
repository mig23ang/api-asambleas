"use strict";

var _app = _interopRequireDefault(require("./configs/app"));

require("./configs/database");

var _socket = require("socket.io");

var _http = _interopRequireDefault(require("http"));

var _sockets = _interopRequireDefault(require("./configs/sockets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//app.listen(app.get("port"));
var server = _http.default.createServer(_app.default);

var httpServer = server.listen(_app.default.get('port'));
var io = new _socket.Server(httpServer, {
  cors: {
    AllowedHeaders: ["*"],
    AllowedMethods: ["GET", "POST", "HEAD"],
    // AllowedOrigins: ["http://localhost:4200/home/hero"]
    //AllowedOrigins: "http://propiedad-horizontal.s3-website.us-east-2.amazonaws.com/dashboard/dashboard",
    AllowedOrigins: "http://el-refugio.s3-website.us-east-2.amazonaws.com/dashboard/dashboard"
  }
});
(0, _sockets.default)(io);
console.log("Server on port", _app.default.get('port'));