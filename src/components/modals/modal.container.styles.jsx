import styled, {css} from 'styled-components'

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const CloseButton = styled.button`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;

    label {
        visibility: hidden;
        opacity: 0;
    }
`

export const ModalStyles = css`
    position: relative;
    background-color: #fff;
    color: #000;
    max-width: 40rem;
    padding: 2rem;
    border-radius: 1.5rem;
    margin-top: 10rem;
    z-index: 1;
`