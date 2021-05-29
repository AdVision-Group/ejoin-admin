import styled from 'styled-components'
import {ModalStyles} from '../modal.container.styles'

export const Modal = styled.div`
    ${ModalStyles};
    text-align: center;
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    color: ${({theme, isRed}) => isRed ? theme.red : theme.primary};
`