"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValor = exports.getQuorum = exports.getLista = void 0;

var _mongodb = require("mongodb");

var _Quorum = _interopRequireDefault(require("../models/Quorum"));

var _valorQuorum = _interopRequireDefault(require("../models/valorQuorum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getQuorum = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var suma = yield _Quorum.default.find();
      var sumAll = Object.values(suma).map(item => item.coeficiente).reduce((a, b) => parseFloat(a) + parseFloat(b));
      res.json(sumAll);
    } catch (error) {
      console.log(error);
    }
  });

  return function getQuorum(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getQuorum = getQuorum;

var getLista = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      var lista = yield _Quorum.default.find();
      res.json(lista);
    } catch (error) {
      console.log(error);
    }
  });

  return function getLista(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getLista = getLista;

var getValor = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    try {
      var valores = yield _valorQuorum.default.find({
        _id: (0, _mongodb.ObjectId)('6232b18d62a92d782e5d3251')
      });
      var valor = Object.values(valores).map(item => item.valor);
      console.log(valor);
      res.json(valor);
    } catch (error) {
      console.log(error);
    }
  });

  return function getValor(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getValor = getValor;