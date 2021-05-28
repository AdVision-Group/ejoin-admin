import React from 'react'
import ReactDOM from 'react-dom'

import ModalContainer from '../modal-container.component'
import ButtonOptions from '../../button-options/button-options.component'

import {
    Modal,
    Title
} from './confirm-modal.styles'

const ConfirmModal = ({
    onConfirm = () => {},
    onCancel =  () => {},
    close = () => {},
}) => {
    return ReactDOM.createPortal((
        <ModalContainer close={close}>
            <Modal>
                <Title>Naozaj chcete pokračovať?</Title>
                <ButtonOptions
                    leftLabel="Potvrdiť"
                    rightLabel="Zrušiť"
                    handleLeftClick={onConfirm}
                    handleRightClick={onCancel}
                    rightRed
                />
            </Modal>   
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default ConfirmModal
