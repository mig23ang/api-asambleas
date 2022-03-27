"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePreguntaById = exports.getPreguntas = exports.getPreguntaById = exports.deletePreguntaById = exports.createPregunta = void 0;

var _Pregunta = _interopRequireDefault(require("../models/Pregunta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createPregunta = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var {
      numero,
      text
    } = req.body;

    try {
      var newPregunta = new _Pregunta.default({
        numero,
        text
      });
      var preguntaSaved = yield newPregunta.save();
      res.status(201).json(preguntaSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  });

  return function createPregunta(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPregunta = createPregunta;

var getPreguntaById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      preguntaId
    } = req.params;
    var pregunta = yield _Pregunta.default.findById(preguntaId);
    res.status(200).json(_Pregunta.default);
  });

  return function getPreguntaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPreguntaById = getPreguntaById;

var getPreguntas = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var preguntas = yield _Pregunta.default.find();
    return res.json(preguntas);
  });

  return function getPreguntas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPreguntas = getPreguntas;

var updatePreguntaById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var updatedPregunta = yield _Pregunta.default.findByIdAndUpdate(req.params.preguntaId, req.body, {
      new: true
    });
    res.status(204).json(updatedPregunta);
  });

  return function updatePreguntaById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updatePreguntaById = updatePreguntaById;

var deletePreguntaById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var {
      preguntaId
    } = req.params;
    yield _Pregunta.default.findByIdAndDelete(preguntaId); // code 200 is ok too

    res.status(204).json();
  });

  return function deletePreguntaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deletePreguntaById = deletePreguntaById;