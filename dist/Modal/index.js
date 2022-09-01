"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _modal = require("./modal.js");

require("./Modal.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Modal(_ref) {
  var id = _ref.id,
      children = _ref.children,
      _ref$escapeClose = _ref.escapeClose,
      escapeClose = _ref$escapeClose === void 0 ? true : _ref$escapeClose,
      _ref$clickClose = _ref.clickClose,
      clickClose = _ref$clickClose === void 0 ? true : _ref$clickClose,
      _ref$closeText = _ref.closeText,
      closeText = _ref$closeText === void 0 ? "Close" : _ref$closeText,
      _ref$blockerClass = _ref.blockerClass,
      blockerClass = _ref$blockerClass === void 0 ? "modal" : _ref$blockerClass,
      _ref$modalClass = _ref.modalClass,
      modalClass = _ref$modalClass === void 0 ? "modal" : _ref$modalClass,
      _ref$closeButtonClass = _ref.closeButtonClass,
      closeButtonClass = _ref$closeButtonClass === void 0 ? "" : _ref$closeButtonClass,
      _ref$showCloseButton = _ref.showCloseButton,
      showCloseButton = _ref$showCloseButton === void 0 ? true : _ref$showCloseButton,
      _ref$handleCloseModal = _ref.handleCloseModal,
      handleCloseModal = _ref$handleCloseModal === void 0 ? null : _ref$handleCloseModal,
      _ref$fadeDuration = _ref.fadeDuration,
      fadeDuration = _ref$fadeDuration === void 0 ? null : _ref$fadeDuration,
      _ref$fadeDelay = _ref.fadeDelay,
      fadeDelay = _ref$fadeDelay === void 0 ? 1.0 : _ref$fadeDelay;
  var dispatch = (0, _reactRedux.useDispatch)();

  var fadingOut = function fadingOut() {
    var blocker = document.getElementById(id);
    blocker.classList.remove('fadingIn');
    blocker.classList.add('fadingOut');
    setTimeout(function () {
      blocker.classList.remove('fadingOut');
      blocker.classList.add('fadingIn');
    }, fadeDuration);
  };

  var closeModal = function closeModal() {
    fadingOut();
    setTimeout(function () {
      dispatch((0, _modal.setModalState)());
    }, fadeDuration);
    handleCloseModal();
  };

  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === "Escape") {
      return closeModal();
    }
  };

  (0, _react.useEffect)(function () {
    if (escapeClose) {
      window.addEventListener("keydown", handleKeyPress);
      return function () {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: "".concat(blockerClass, " fadingIn"),
    onClick: clickClose ? closeModal : null
  }, /*#__PURE__*/_react.default.createElement("style", null, "  \n                    .fadingIn {\n                        animation: blockerFadeIn ".concat(fadeDuration, "ms;\n                    }\n\n                    .fadingOut {\n                        animation: blockerFadeOut ").concat(fadeDuration, "ms;\n                    }\n\n                    @keyframes blockerFadeIn {\n                        0% { opacity: 0; }\n                        100% { opacity: 1; }\n                    }\n\n                    @keyframes blockerFadeOut {\n                        0% { opacity: 1; }\n                        100% { opacity: 0; }\n                    }\n                ")), /*#__PURE__*/_react.default.createElement("div", {
    className: modalClass
  }, /*#__PURE__*/_react.default.createElement("style", null, "\n                        @keyframes modalFadeIn {\n                            0% { opacity: 0; }\n                            ".concat(fadeDelay / (1 + fadeDelay) * 100, "% { opacity: 0; }\n                            100% { opacity: 1; }\n                        }\n                    ")), showCloseButton ? /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close-modal ".concat(closeButtonClass),
    onClick: clickClose ? null : closeModal
  }, "x ", closeText) : null, children));
}

var _default = Modal;
exports.default = _default;