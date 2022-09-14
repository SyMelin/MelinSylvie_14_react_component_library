import * as modalActions from './modal'
import modalReducer from './modal'

describe('Modal actions', () => {
    it('should create a setModalState action object', () => {
        expect(modalActions.setModalState()).toEqual({
            type: 'modal/setModalState',
        })
    })

    it('should create a setModalPermission action object', () => {
        expect(modalActions.setModalPermission(true)).toEqual({
            type: 'modal/setModalPermission',
            payload: true,
        })
    })

    it('should create a setBlockerStatus action object', () => {
        expect(modalActions.setBlockerStatus('false')).toEqual({
            type: 'modal/setBlockerStatus',
            payload: 'false',
        })
    })

    it('should create a setModalStatus action object', () => {
        expect(modalActions.setModalStatus('true')).toEqual({
            type: 'modal/setModalStatus',
            payload: 'true',
        })
    })
})

describe('Modal reducer', () => {
    it('should return the initial state when state is undefined', () => {
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
        expect(modalReducer(undefined, { type: '@INIT'})).toEqual(initialState)
    })
    it('should return toggle modal.modalIsActive', () => {
        const state = { modalIsActive: true }
        const expected = { modalIsActive: false }
        expect(modalReducer(state, modalActions.setModalState())).toEqual(expected)
    })
    it('should return set modal.modalCanBeOpen', () => {
        const expected = { modalCanBeOpen: true }
        expect(modalReducer({}, modalActions.setModalPermission(true))).toEqual(expected)
    })
    it('should return set modal.blocker.status', () => {
        const state = { blocker: {status: 'closed' }}
        const expected = { blocker: {status: 'open' }}
        expect(modalReducer(state, modalActions.setBlockerStatus('open'))).toEqual(expected)
    })
    it('should return set modal.modal.status', () => {
        const state = { modal: {status: 'isAboutToClose' }}
        const expected = { modal: {status: 'closed' }}
        expect(modalReducer(state, modalActions.setModalStatus('closed'))).toEqual(expected)
    })
    it('should return state in invalid action', () => {
        const state = {
            modalIsActive: false,
            modalCanBeOpen: false,
            blocker: {
                status: 'blockerIsClosed'
            },
            modal: {
                status: 'modalIsClosed',
            }
        }
        expect(modalReducer(state, { type: 'INVALID'})).toEqual(state)
    })
})