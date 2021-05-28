import styled from 'styled-components'
import {ModalStyles} from '../modal.container.styles'

export const Modal = styled.div`
    ${ModalStyles};

    select {
        display: block;
        padding: 1.5rem 2rem;
        border-radius: 1.5rem;
        margin: 2rem auto;
        width: 100%;
        max-width: 32rem;
        outline: none;
    }
`

export const Title = styled.div`
    font-size: 2.2rem;
    font-weight: bolder;
    margin-bottom: 1rem;
`
