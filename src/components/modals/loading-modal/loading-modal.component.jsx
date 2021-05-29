import React from 'react'
import ReactDOM from 'react-dom'

import ModalContainer from '../modal-container.component'
import Spinner from '../../spinner/spinner.component'
import {
    AiOutlineCheckCircle,
    AiOutlineCloseCircle
} from 'react-icons/ai'

import {
    Modal,
    IconContainer,
} from './loading-modal.styles'

const LoadingModal = ({
    close = () => {},
    loading = true,
    message = "",
    status = "LOADING"
}) => {
    return ReactDOM.createPortal((
        <ModalContainer close={close}>
            <Modal>
                {loading && <Spinner/>}
                {status === "SUCCESS" && (
                    <div>
                        <IconContainer>
                            <AiOutlineCheckCircle/>
                        </IconContainer>
                        <h2>{message}</h2>
                    </div>
                )}

                {status === "ERROR" && (
                    <div>
                        <IconContainer isRed>
                            <AiOutlineCloseCircle/>
                        </IconContainer>
                        <h2>{message}</h2>
                    </div>
                )}
            </Modal>   
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default LoadingModal
