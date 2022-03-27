"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPreguntas = void 0;

var _mongodb = require("mongodb");

var _Pregunta = _interopRequireDefault(require("../models/Pregunta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createPreguntas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    try {
      // Count Documents
      var count = yield _Pregunta.default.estimatedDocumentCount(); // check for existing preguntas

      if (count > 0) return; // Create default Roles

      var values = yield Promise.all([//*pregunta numero   1
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("62125ed19531814630115308"),
        numero: 1,
        text: "",
        visible: false
      }).save(), //*pregunta numero 2
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621379aebbdc901fa89fd499"),
        numero: 2,
        text: "",
        visible: false
      }).save(), //*pregunta numero 3
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd81fac1ed91758c66c4f"),
        numero: 3,
        text: "",
        visible: false
      }).save(), //*pregunta numero 4
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd823ac1ed91758c66c51"),
        numero: 4,
        text: "",
        visible: false
      }).save(), //*pregunta numero 5
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd83dac1ed91758c66c53"),
        numero: 5,
        text: "",
        visible: false
      }).save(), //*pregunta numero 6
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd84cac1ed91758c66c55"),
        numero: 6,
        text: "",
        visible: false
      }).save(), //*pregunta numero 7
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd85aac1ed91758c66c57"),
        numero: 7,
        text: "",
        visible: false
      }).save(), //*pregunta numero 8
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd86aac1ed91758c66c59"),
        numero: 8,
        text: "",
        visible: false
      }).save(), //*pregunta numero 9
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd883ac1ed91758c66c5b"),
        numero: 9,
        text: "",
        visible: false
      }).save(), //*pregunta 10
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd895ac1ed91758c66c5d"),
        numero: 10,
        text: "",
        visible: false
      }).save(), //*pregunta 11
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd8a8ac1ed91758c66c5f"),
        numero: 11,
        text: "",
        visible: false
      }).save(), //*pregunta 12
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("621fd8b4ac1ed91758c66c61"),
        numero: 12,
        text: "",
        visible: false
      }).save(), //*pregunta 13
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("622bd5d4e3879a0e110f5c68"),
        numero: 13,
        text: "",
        visible: false
      }).save(), //*pregunta 14
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("622bd5f1e3879a0e110f5c69"),
        numero: 14,
        text: "",
        visible: false
      }).save(), //*pregunta 15
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("622bd5f7e3879a0e110f5c6a"),
        numero: 15,
        text: "",
        visible: false
      }).save(), //*pregunta 16
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("622bd5fce3879a0e110f5c6b"),
        numero: 16,
        text: "",
        visible: false
      }).save(), //*pregunta 17
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("622bd601e3879a0e110f5c6c"),
        numero: 17,
        text: "",
        visible: false
      }).save(), //*pregunta 18
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("622bd606e3879a0e110f5c6d"),
        numero: 18,
        text: "",
        visible: false
      }).save(), //*pregunta 19
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("622bd60be3879a0e110f5c6e"),
        numero: 19,
        text: "",
        visible: false
      }).save(), //*pregunta numero 20
      new _Pregunta.default({
        _id: (0, _mongodb.ObjectId)("622bd611e3879a0e110f5c6f"),
        numero: 20,
        text: "",
        visible: false
      }).save()]);
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  });

  return function createPreguntas() {
    return _ref.apply(this, arguments);
  };
}();

exports.createPreguntas = createPreguntas;