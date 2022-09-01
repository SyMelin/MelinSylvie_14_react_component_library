import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    modalIsActive: false,
}


// Action creators
export const setModalState = createAction('modal/isOpen')


// Reducer creator
export default createReducer(initialState, builder => builder
    .addCase(setModalState, (draft) => {
        draft.modalIsActive = !draft.modalIsActive
        return
    })  
)