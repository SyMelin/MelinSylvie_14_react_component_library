"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalButton(_ref) {
  var clickClose = _ref.clickClose,
      closeText = _ref.closeText,
      closeButtonClass = _ref.closeButtonClass,
      closeModal = _ref.closeModal;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close-modal ".concat(closeButtonClass),
    onClick: clickClose ? null : closeModal
  }, closeText);
}

var _default = ModalButton;
exports.default = _default;