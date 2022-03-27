"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAsambleas = void 0;

var _mongodb = require("mongodb");

var _Asamblea = _interopRequireDefault(require("../models/Asamblea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createAsambleas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    try {
      // Count Documents
      var count = yield _Asamblea.default.estimatedDocumentCount(); // check for existing 

      if (count > 0) return; // Create default 

      var values = yield Promise.all([new _Asamblea.default({
        _id: (0, _mongodb.ObjectId)('62389256539277f3088e309e'),
        nombre: "",
        description: "",
        fecha: "05/05/2002",
        urlImg: "",
        urlAsamblea: "",
        fileName: "file-1647881310409.jpg",
        activa: false
      }).save()]);
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  });

  return function createAsambleas() {
    return _ref.apply(this, arguments);
  };
}();

exports.createAsambleas = createAsambleas;