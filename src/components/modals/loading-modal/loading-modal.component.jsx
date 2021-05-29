import React from 'react'
import ReactDOM from 'react-dom'

import ModalContainer from '../modal-container.component'
import Spinner from '../../spinner/spinner.component'

import {
    Modal
} from './loading-modal.styles'

const LoadingModal = ({
    close = () => {}
}) => {
    return ReactDOM.createPortal((
        <ModalContainer close={close}>
            <Modal>
                <Spinner/>
            </Modal>   
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default LoadingModal
