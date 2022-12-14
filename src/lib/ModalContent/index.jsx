import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setModalStatus } from '../Modal/modal.js'
import ModalButton from '../ModalButton'

function ModalContent({
        id,
        children,
        clickClose,
        closeText,
        modalClass,
        closeButtonClass,
        showCloseButton,
        fadeDuration,
        handleModalBeforeOpen,
        handleModalOpen,
        closeModal
    }) {

    const dispatch = useDispatch()

    useEffect(() => {
        if (handleModalBeforeOpen) {
            handleModalBeforeOpen()
        }
        dispatch(setModalStatus('modalIsOpening'))
        
        const timerModal = setTimeout(() => {
            dispatch(setModalStatus('modalIsOpen'))
            if (handleModalOpen) {
            handleModalOpen()
            }

            return () => clearTimeout(timerModal)
            }, fadeDuration)
    },
    // eslint-disable-next-line
    [])
        
    return (
        <div
            id={`${id}-${modalClass}`}
            className={`${modalClass} fadingIn`}
            data-testid="modal-content"
        >
            {showCloseButton
                ? <ModalButton
                    clickClose={clickClose}
                    closeText={closeText}
                    closeButtonClass={closeButtonClass}
                    closeModal={closeModal}
                />
                : null
            }  
            {children}
        </div>
    )
}
export default ModalContent