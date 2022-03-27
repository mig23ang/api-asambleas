"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var asambleaCtrl = _interopRequireWildcard(require("../controllers/asamblea.controller"));

var _storage = require("../libs/storage");

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get("/", asambleaCtrl.getAsambleas);
router.get("/:asambleaId", asambleaCtrl.getAsambleaById);
router.post("/", _storage.upload.single("nombreFile"), asambleaCtrl.createAsamblea);
router.put("/:asambleaId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], asambleaCtrl.updateAsambleaById);
router.delete("/:asambleaId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], asambleaCtrl.deleteAsambleaById);
var _default = router;
exports.default = _default;