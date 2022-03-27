"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var respuestasCtrl = _interopRequireWildcard(require("../controllers/respuesta.controller"));

var _middlewares = require("../middlewares");

var _respuesta2 = require("../middlewares/respuesta");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get("/respuesta1", respuestasCtrl.getRespuesta1);
router.get("/respuesta2", respuestasCtrl.getRespuesta2);
router.get("/respuesta3", respuestasCtrl.getRespuesta3);
router.get("/respuesta4", respuestasCtrl.getRespuesta4);
router.get("/respuesta5", respuestasCtrl.getRespuesta5);
router.get("/respuesta6", respuestasCtrl.getRespuesta6);
router.get("/respuesta7", respuestasCtrl.getRespuesta7);
router.get("/respuesta8", respuestasCtrl.getRespuesta8);
router.get("/respuesta9", respuestasCtrl.getRespuesta9);
router.get("/respuesta10", respuestasCtrl.getRespuesta10);
router.get("/respuesta11", respuestasCtrl.getRespuesta11);
router.get("/respuesta12", respuestasCtrl.getRespuesta12);
router.get("/respuesta13", respuestasCtrl.getRespuesta13);
router.get("/respuesta14", respuestasCtrl.getRespuesta14);
router.get("/respuesta15", respuestasCtrl.getRespuesta15);
router.get("/respuesta16", respuestasCtrl.getRespuesta16);
router.get("/respuesta17", respuestasCtrl.getRespuesta17);
router.get("/respuesta18", respuestasCtrl.getRespuesta18);
router.get("/respuesta19", respuestasCtrl.getRespuesta19);
router.get("/respuesta20", respuestasCtrl.getRespuesta20); //router.get("/:respuestaId", respuestasCtrl.getRespuestaById);

router.post("/", [_middlewares.authJwt.verifyToken], respuestasCtrl.createRespuesta);
router.put("/:respuestaId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], respuestasCtrl.updateRespuestaById);
router.delete("/:respuestaId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], respuestasCtrl.deleteRespuestaById);
var _default = router;
exports.default = _default;