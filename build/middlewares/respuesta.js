"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.respuestaRepetida = void 0;

var _Pregunta = _interopRequireDefault(require("../models/Pregunta"));

var _Respuesta = _interopRequireDefault(require("../models/Respuesta"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var respuestaRepetida = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      var {
        numero
      } = req.body;
      var user = yield _User.default.findById(req.userId);
      var preguntasFound = yield _Pregunta.default.find({
        numero: {
          $in: numero
        }
      });
      var idPregunta = preguntasFound.map(pregunta => pregunta._id);
      var respuestaFound = yield _Respuesta.default.find({
        idPregunta: {
          $in: idPregunta
        }
      });
      console.log(respuestaFound, "aca la respuesta aaaaaa");

      for (var i = 0; i < respuestaFound.length; i++) {
        if (respuestaFound[i].idUser === user._id) {
          next();
          return;
        } else {
          return res.status(500).send({
            message: " ya registro voto"
          });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: error
      });
    }
  });

  return function respuestaRepetida(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.respuestaRepetida = respuestaRepetida;