"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleModalState = exports.setModalStatus = exports.setModalPermission = exports.setBlockerStatus = exports.default = void 0;

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
};

var _createSlice = (0, _toolkit.createSlice)({
  name: 'modal',
  initialState: initialState,
  reducers: {
    toggleModalState: function toggleModalState(draft) {
      draft.modalIsActive = !draft.modalIsActive;
      return;
    },
    setModalPermission: function setModalPermission(draft, action) {
      draft.modalCanBeOpen = action.payload;
      return;
    },
    setBlockerStatus: function setBlockerStatus(draft, action) {
      draft.blocker.status = action.payload;
      return;
    },
    setModalStatus: function setModalStatus(draft, action) {
      draft.modal.status = action.payload;
      return;
    }
  }
}),
    actions = _createSlice.actions,
    reducer = _createSlice.reducer;

var toggleModalState = actions.toggleModalState,
    setModalPermission = actions.setModalPermission,
    setBlockerStatus = actions.setBlockerStatus,
    setModalStatus = actions.setModalStatus;
exports.setModalStatus = setModalStatus;
exports.setBlockerStatus = setBlockerStatus;
exports.setModalPermission = setModalPermission;
exports.toggleModalState = toggleModalState;
var _default = reducer;
exports.default = _default;