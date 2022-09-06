"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Modal: true,
  ModalContent: true,
  ModalButton: true
};
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _Modal.default;
  }
});
Object.defineProperty(exports, "ModalButton", {
  enumerable: true,
  get: function get() {
    return _ModalButton.default;
  }
});
Object.defineProperty(exports, "ModalContent", {
  enumerable: true,
  get: function get() {
    return _ModalContent.default;
  }
});

var _Modal = _interopRequireDefault(require("./Modal"));

var _ModalContent = _interopRequireDefault(require("./ModalContent"));

var _ModalButton = _interopRequireDefault(require("./ModalButton"));

var _modal = require("./Modal/modal.js");

Object.keys(_modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _modal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modal[key];
    }
  });
});

var _selector = require("./Modal/selector.js");

Object.keys(_selector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _selector[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selector[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }