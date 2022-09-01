"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setModalState = exports.default = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  modalIsActive: false
}; // Action creators

var setModalState = (0, _toolkit.createAction)('modal/isOpen'); // Reducer creator

exports.setModalState = setModalState;

var _default = (0, _toolkit.createReducer)(initialState, function (builder) {
  return builder.addCase(setModalState, function (draft) {
    draft.modalIsActive = !draft.modalIsActive;
    return;
  });
});

exports.default = _default;