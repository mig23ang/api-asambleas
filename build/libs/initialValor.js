"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValor = void 0;

var _valorQuorum = _interopRequireDefault(require("../models/valorQuorum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createValor = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    try {
      // Count Documents
      var count = yield _valorQuorum.default.estimatedDocumentCount(); // check for existing 

      if (count > 0) return; // Create default 

      var values = yield Promise.all([new _valorQuorum.default({
        _id: Object('6232b18d62a92d782e5d3251'),
        valor: 50
      }).save()]);
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  });

  return function createValor() {
    return _ref.apply(this, arguments);
  };
}();

exports.createValor = createValor;