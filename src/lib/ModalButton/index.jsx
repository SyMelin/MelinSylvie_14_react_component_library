import React from 'react'

function ModalButton({ clickClose, closeText, closeButtonClass, closeModal }) {
    return (
        <button
            type='button'
            className={`close-modal ${closeButtonClass}`}
            data-testid="close-modal"
            onClick={clickClose ? null : closeModal}
        >
            {closeText}
        </button>
    )
}

export default ModalButton