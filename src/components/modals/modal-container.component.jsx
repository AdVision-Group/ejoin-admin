import React from 'react'

import {
    ModalContainer,
    CloseButton
} from './modal.container.styles'

const Modal = ({
    children,  
    close = () => {}
}) => {
    return (
        <ModalContainer>
            <CloseButton onClick={close}>
                <label>zatvorit</label>
            </CloseButton>
            {children}
        </ModalContainer>
    )
}

export default Modal
