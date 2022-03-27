"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _package = _interopRequireDefault(require("../../package.json"));

var _products = _interopRequireDefault(require("../routes/products.routes"));

var _user = _interopRequireDefault(require("../routes/user.routes"));

var _auth = _interopRequireDefault(require("../routes/auth.routes"));

var _pregunta = _interopRequireDefault(require("../routes/pregunta.routes"));

var _respuesta = _interopRequireDefault(require("../routes/respuesta.routes"));

var _quorum = _interopRequireDefault(require("../routes/quorum.routes"));

var _asamblea = _interopRequireDefault(require("../routes/asamblea.routes"));

var _initialSetup = require("../libs/initialSetup");

var _initialPreguntas = require("../libs/initialPreguntas");

var _initialValor = require("../libs/initialValor");

var _initialAsamblea = require("../libs/initialAsamblea");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
(0, _initialSetup.createRoles)();
(0, _initialSetup.createAdmin)();
(0, _initialPreguntas.createPreguntas)();
(0, _initialValor.createValor)();
(0, _initialAsamblea.createAsambleas)(); // Settings

app.set("pkg", _package.default);
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4); // Middleware

app.use((0, _cors.default)());
app.use((0, _helmet.default)()); //app.use(morgan("dev"));

app.use(_express.default.json());
app.use(_express.default.static(__dirname + '/../public'));
app.use(_express.default.urlencoded({
  extended: false
})); // Welcome Routes

app.get("/", (req, res) => {
  res.json({
    message: "aplicación para el control de usuarios",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author
  });
}); // Routes

app.use("/api/products", _products.default);
app.use("/api/preguntas", _pregunta.default);
app.use("/api/users", _user.default);
app.use("/api/auth", _auth.default);
app.use("/api/respuesta", _respuesta.default);
app.use("/api/quorum", _quorum.default);
app.use("/api/asamblea", _asamblea.default);
var _default = app;
exports.default = _default;