"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _quorum = require("../controllers/quorum.controller");

var router = (0, _express.Router)();
router.get("/", _quorum.getQuorum);
router.get("/lista", _quorum.getLista);
router.get("/valor", _quorum.getValor);
var _default = router;
exports.default = _default;