import { createSlice  } from '@reduxjs/toolkit'

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


const { actions, reducer } = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModalState: (draft) => {
            draft.modalIsActive = !draft.modalIsActive
            return
        },
        setModalPermission: (draft, action) => {
            draft.modalCanBeOpen = action.payload
            return
        },
        setBlockerStatus: (draft, action) => {
            draft.blocker.status = action.payload
            return
        },
        setModalStatus: (draft, action) => {
            draft.modal.status = action.payload
            return
        },
    }
})

export const {
    toggleModalState,      // modal is active or not
    setModalPermission, // allow the modal content to open/appear
    setBlockerStatus,   // status of the blocker (overlay)
    setModalStatus,     // status of the modal's content
} = actions

export default reducer