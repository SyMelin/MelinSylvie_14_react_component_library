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
        setModalState: (draft) => {
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
    setModalState,
    setModalPermission,
    setBlockerStatus,
    setModalStatus,
} = actions

export default reducer