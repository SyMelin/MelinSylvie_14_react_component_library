"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _modal = require("../Modal/modal.js");

var _ModalButton = _interopRequireDefault(require("../ModalButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ModalContent(_ref) {
  var id = _ref.id,
      children = _ref.children,
      clickClose = _ref.clickClose,
      closeText = _ref.closeText,
      modalClass = _ref.modalClass,
      closeButtonClass = _ref.closeButtonClass,
      showCloseButton = _ref.showCloseButton,
      fadeDuration = _ref.fadeDuration,
      handleModalBeforeOpen = _ref.handleModalBeforeOpen,
      handleModalOpen = _ref.handleModalOpen,
      closeModal = _ref.closeModal;
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    if (handleModalBeforeOpen) {
      handleModalBeforeOpen();
    }

    dispatch((0, _modal.setModalStatus)('modalIsOpening'));
    var timerModal = setTimeout(function () {
      dispatch((0, _modal.setModalStatus)('modalIsOpen'));

      if (handleModalOpen) {
        handleModalOpen();
      }

      return function () {
        return clearTimeout(timerModal);
      };
    }, fadeDuration);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "".concat(id, "-").concat(modalClass),
    className: "".concat(modalClass, " fadingIn"),
    "data-testid": "modal-content"
  }, showCloseButton ? /*#__PURE__*/_react.default.createElement(_ModalButton.default, {
    clickClose: clickClose,
    closeText: closeText,
    closeButtonClass: closeButtonClass,
    closeModal: closeModal
  }) : null, children);
}

var _default = ModalContent;
exports.default = _default;