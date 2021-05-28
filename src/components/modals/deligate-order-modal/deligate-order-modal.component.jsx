import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import {tabsArr} from '../../../utils/orders.utils'
import ButtonOption from '../../button-options/button-options.component'
import ModalContainer from '../modal-container.component'

import {
    Modal,
    Title,
} from './deligate-order-modal.styles'

const DeligateOrderModal = ({
    close = () => {},
    update = () => {},
    id = null
}) => {
    const [selectOption, setSelectOption] = useState(tabsArr[0].status)

    return ReactDOM.createPortal((
        <ModalContainer
            close={close}
        >
            <Modal>
                <Title>Vyberte jednu z možností</Title>
                <select value={selectOption} onChange={(e) => setSelectOption(e.target.value)}>
                    {tabsArr.map((tab, idx) => (
                        <option key={idx} value={tab.status}>{tab.name}</option>
                    ))}
                </select>
                <ButtonOption
                    top={2}
                    leftLabel="Upraviť"
                    rightLabel="Zrušiť"
                    handleLeftClick={() => update(id, selectOption)}
                    handleRightClick={close}
                    rightRed
                />
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default DeligateOrderModal
