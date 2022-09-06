import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    modalIsActive: false,
    modalCanBeOpen: false,
    blocker: {
        status: 'blockerIsClosed'
    },
    modal: {
        status: 'modalIsClosed',
    }
}


// Action creators
export const setModalState = createAction('modal/isOpen')
export const setModalPermission = createAction('modal/canBeOpen')
export const setBlockerStatus = createAction('modal/setBlockerStatus')
export const setModalStatus = createAction('modal/setModalStatus')


// Reducer creator
export default createReducer(initialState, builder => builder
    .addCase(setModalState, (draft) => {
        draft.modalIsActive = !draft.modalIsActive
        return
    })
    .addCase(setModalPermission, (draft, action) => {
        draft.modalCanBeOpen = action.payload
        return
    })
    .addCase(setBlockerStatus, (draft, action) => {
        draft.blocker.status = action.payload
        return
    })
    .addCase(setModalStatus, (draft, action) => {
        draft.modal.status = action.payload
        return
    })
)