"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAsambleaById = exports.getAsambleas = exports.getAsambleaById = exports.deleteAsambleaById = exports.createAsamblea = void 0;

var _mongodb = require("mongodb");

var _Asamblea = _interopRequireDefault(require("../models/Asamblea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var URL_PUBLIC = "https://eskala-api.herokuapp.com/";

var createAsamblea = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var {
      nombre,
      description,
      fecha,
      urlAsamblea
    } = req.body;
    var {
      file
    } = req;

    try {
      var newAsamblea = new _Asamblea.default({
        nombre,
        description,
        fecha,
        urlImg: "".concat(URL_PUBLIC).concat(file.filename),
        urlAsamblea,
        fileName: file.filename
      });
      var asambleaSaved = yield newAsamblea.save();
      res.status(201).json(asambleaSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  });

  return function createAsamblea(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createAsamblea = createAsamblea;

var getAsambleaById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      asambleaId
    } = req.params;
    var asamblea = yield _Asamblea.default.findById(asambleaId);
    res.status(200).json(asamblea);
  });

  return function getAsambleaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAsambleaById = getAsambleaById;

var getAsambleas = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var asambleas = yield _Asamblea.default.findOne({
      _id: (0, _mongodb.ObjectId)('62389256539277f3088e309e')
    });
    return res.json(asambleas);
  });

  return function getAsambleas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAsambleas = getAsambleas;

var updateAsambleaById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var updatedAsamblea = yield _Asamblea.default.findByIdAndUpdate(req.params.asambleaId, req.body, {
      new: true
    });
    res.status(204).json(updatedAsamblea);
  });

  return function updateAsambleaById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateAsambleaById = updateAsambleaById;

var deleteAsambleaById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var {
      asambleaId
    } = req.params;
    yield _Asamblea.default.findByIdAndDelete(asambleaId); // code 200 is ok too

    res.status(204).json();
  });

  return function deleteAsambleaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteAsambleaById = deleteAsambleaById;