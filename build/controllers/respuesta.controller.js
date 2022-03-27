"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRespuestaById = exports.getRespuestas = exports.getRespuestaById = exports.getRespuesta9 = exports.getRespuesta8 = exports.getRespuesta7 = exports.getRespuesta6 = exports.getRespuesta5 = exports.getRespuesta4 = exports.getRespuesta3 = exports.getRespuesta20 = exports.getRespuesta2 = exports.getRespuesta19 = exports.getRespuesta18 = exports.getRespuesta17 = exports.getRespuesta16 = exports.getRespuesta15 = exports.getRespuesta14 = exports.getRespuesta13 = exports.getRespuesta12 = exports.getRespuesta11 = exports.getRespuesta10 = exports.getRespuesta1 = exports.deleteRespuestaById = exports.createRespuesta = void 0;

var _Respuesta = _interopRequireDefault(require("../models/Respuesta"));

var _Pregunta = _interopRequireDefault(require("../models/Pregunta"));

var _User = _interopRequireDefault(require("../models/User"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRespuesta = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var {
      si,
      no,
      numero
    } = req.body;
    var preguntasFound = yield _Pregunta.default.findOne({
      numero: {
        $in: numero
      }
    });
    var idPregunta = preguntasFound._id;
    var idUsuario = req.userId;
    var usuario = yield _User.default.findById(idUsuario);
    var userId = usuario._id;
    console.log(userId, "aca el id del usuario", idPregunta, "aca el id de la pregunta");
    var votoSi = si * usuario.coeficiente;
    var votoNo = no * usuario.coeficiente;

    try {
      var respuestaFound = yield _Respuesta.default.findOne({
        idUser: (0, _mongodb.ObjectId)(userId),
        idPregunta: (0, _mongodb.ObjectId)(idPregunta)
      });
      console.log(respuestaFound, "aca la respuesta");

      if (!respuestaFound) {
        var newRespuesta = new _Respuesta.default({
          si: votoSi,
          no: votoNo,
          propietario: usuario.apartment,
          idUser: userId,
          idPregunta
        });
        var RespuestaSaved = yield newRespuesta.save();
        res.status(201).json(RespuestaSaved);
      } else {
        return res.status(500).json({
          message: "usuario ya registro el voto"
        });
      }
    } catch (error) {
      console.log(error);
    }
  });

  return function createRespuesta(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.createRespuesta = createRespuesta;

var getRespuestaById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      RespuestaId
    } = req.params;
    var Respuesta = yield Respuesta.findById(RespuestaId);
    res.status(200).json(Respuesta);
  });

  return function getRespuestaById(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRespuestaById = getRespuestaById;

var getRespuestas = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find();
    return res.json(respuestas);
  });

  return function getRespuestas(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getRespuestas = getRespuestas;

var getRespuesta1 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "62125ed19531814630115308"
    });
    return res.json(respuestas);
  });

  return function getRespuesta1(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getRespuesta1 = getRespuesta1;

var getRespuesta2 = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621379aebbdc901fa89fd499"
    });
    return res.json(respuestas);
  });

  return function getRespuesta2(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getRespuesta2 = getRespuesta2;

var getRespuesta3 = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd81fac1ed91758c66c4f"
    });
    return res.json(respuestas);
  });

  return function getRespuesta3(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getRespuesta3 = getRespuesta3;

var getRespuesta4 = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd823ac1ed91758c66c51"
    });
    return res.json(respuestas);
  });

  return function getRespuesta4(_x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getRespuesta4 = getRespuesta4;

var getRespuesta5 = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd83dac1ed91758c66c53"
    });
    return res.json(respuestas);
  });

  return function getRespuesta5(_x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getRespuesta5 = getRespuesta5;

var getRespuesta6 = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd84cac1ed91758c66c55"
    });
    return res.json(respuestas);
  });

  return function getRespuesta6(_x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getRespuesta6 = getRespuesta6;

var getRespuesta7 = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd85aac1ed91758c66c57"
    });
    return res.json(respuestas);
  });

  return function getRespuesta7(_x20, _x21) {
    return _ref10.apply(this, arguments);
  };
}();

exports.getRespuesta7 = getRespuesta7;

var getRespuesta8 = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd86aac1ed91758c66c59"
    });
    return res.json(respuestas);
  });

  return function getRespuesta8(_x22, _x23) {
    return _ref11.apply(this, arguments);
  };
}();

exports.getRespuesta8 = getRespuesta8;

var getRespuesta9 = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd883ac1ed91758c66c5b"
    });
    return res.json(respuestas);
  });

  return function getRespuesta9(_x24, _x25) {
    return _ref12.apply(this, arguments);
  };
}();

exports.getRespuesta9 = getRespuesta9;

var getRespuesta10 = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd895ac1ed91758c66c5d"
    });
    return res.json(respuestas);
  });

  return function getRespuesta10(_x26, _x27) {
    return _ref13.apply(this, arguments);
  };
}();

exports.getRespuesta10 = getRespuesta10;

var getRespuesta11 = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd8a8ac1ed91758c66c5f"
    });
    return res.json(respuestas);
  });

  return function getRespuesta11(_x28, _x29) {
    return _ref14.apply(this, arguments);
  };
}();

exports.getRespuesta11 = getRespuesta11;

var getRespuesta12 = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "621fd8b4ac1ed91758c66c61"
    });
    return res.json(respuestas);
  });

  return function getRespuesta12(_x30, _x31) {
    return _ref15.apply(this, arguments);
  };
}();

exports.getRespuesta12 = getRespuesta12;

var getRespuesta13 = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "622bd5d4e3879a0e110f5c68"
    });
    return res.json(respuestas);
  });

  return function getRespuesta13(_x32, _x33) {
    return _ref16.apply(this, arguments);
  };
}();

exports.getRespuesta13 = getRespuesta13;

var getRespuesta14 = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "622bd5f1e3879a0e110f5c69"
    });
    return res.json(respuestas);
  });

  return function getRespuesta14(_x34, _x35) {
    return _ref17.apply(this, arguments);
  };
}();

exports.getRespuesta14 = getRespuesta14;

var getRespuesta15 = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "622bd5f7e3879a0e110f5c6a"
    });
    return res.json(respuestas);
  });

  return function getRespuesta15(_x36, _x37) {
    return _ref18.apply(this, arguments);
  };
}();

exports.getRespuesta15 = getRespuesta15;

var getRespuesta16 = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "622bd5fce3879a0e110f5c6b"
    });
    return res.json(respuestas);
  });

  return function getRespuesta16(_x38, _x39) {
    return _ref19.apply(this, arguments);
  };
}();

exports.getRespuesta16 = getRespuesta16;

var getRespuesta17 = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "622bd601e3879a0e110f5c6c"
    });
    return res.json(respuestas);
  });

  return function getRespuesta17(_x40, _x41) {
    return _ref20.apply(this, arguments);
  };
}();

exports.getRespuesta17 = getRespuesta17;

var getRespuesta18 = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "622bd606e3879a0e110f5c6d"
    });
    return res.json(respuestas);
  });

  return function getRespuesta18(_x42, _x43) {
    return _ref21.apply(this, arguments);
  };
}();

exports.getRespuesta18 = getRespuesta18;

var getRespuesta19 = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "622bd60be3879a0e110f5c6e"
    });
    return res.json(respuestas);
  });

  return function getRespuesta19(_x44, _x45) {
    return _ref22.apply(this, arguments);
  };
}();

exports.getRespuesta19 = getRespuesta19;

var getRespuesta20 = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(function* (req, res) {
    var respuestas = yield _Respuesta.default.find({
      "idPregunta": "622bd611e3879a0e110f5c6f"
    });
    return res.json(respuestas);
  });

  return function getRespuesta20(_x46, _x47) {
    return _ref23.apply(this, arguments);
  };
}();

exports.getRespuesta20 = getRespuesta20;

var updateRespuestaById = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(function* (req, res) {
    var updatedRespuesta = yield _Respuesta.default.findByIdAndUpdate(req.params.RespuestaId, req.body, {
      new: true
    });
    res.status(204).json(updatedRespuesta);
  });

  return function updateRespuestaById(_x48, _x49) {
    return _ref24.apply(this, arguments);
  };
}();

exports.updateRespuestaById = updateRespuestaById;

var deleteRespuestaById = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(function* (req, res) {
    var {
      respuestaId
    } = req.params;
    yield _Respuesta.default.findByIdAndDelete(respuestaId); // code 200 is ok too

    res.status(204).json();
  });

  return function deleteRespuestaById(_x50, _x51) {
    return _ref25.apply(this, arguments);
  };
}();

exports.deleteRespuestaById = deleteRespuestaById;