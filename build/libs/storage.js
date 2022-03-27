"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = void 0;

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = _multer.default.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "".concat(__dirname, "/../public"));
  },
  filename: function filename(req, file, cb) {
    var ext = file.originalname.split('.').pop();
    var filename = "file-".concat(Date.now(), ".").concat(ext);
    cb(null, filename);
  }
});

var upload = (0, _multer.default)({
  storage
});
exports.upload = upload;