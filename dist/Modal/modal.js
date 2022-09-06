"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setModalStatus = exports.setModalState = exports.setModalPermission = exports.setBlockerStatus = exports.default = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  modalIsActive: false,
  modalCanBeOpen: false,
  blocker: {
    status: 'blockerIsClosed'
  },
  modal: {
    status: 'modalIsClosed'
  }
}; // Action creators

var setModalState = (0, _toolkit.createAction)('modal/isOpen');
exports.setModalState = setModalState;
var setModalPermission = (0, _toolkit.createAction)('modal/canBeOpen');
exports.setModalPermission = setModalPermission;
var setBlockerStatus = (0, _toolkit.createAction)('modal/setBlockerStatus');
exports.setBlockerStatus = setBlockerStatus;
var setModalStatus = (0, _toolkit.createAction)('modal/setModalStatus'); // Reducer creator

exports.setModalStatus = setModalStatus;

var _default = (0, _toolkit.createReducer)(initialState, function (builder) {
  return builder.addCase(setModalState, function (draft) {
    draft.modalIsActive = !draft.modalIsActive;
    return;
  }).addCase(setModalPermission, function (draft, action) {
    draft.modalCanBeOpen = action.payload;
    return;
  }).addCase(setBlockerStatus, function (draft, action) {
    draft.blocker.status = action.payload;
    return;
  }).addCase(setModalStatus, function (draft, action) {
    draft.modal.status = action.payload;
    return;
  });
});

exports.default = _default;