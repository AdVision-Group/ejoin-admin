import styled, { css } from "styled-components"

const shrinkLabel = css`
    left: .5rem;
    top: -16px;
    font-size: 12px;
    transform: unset;
    /* color: var(--input-color); */
`
export const InputGroup = styled.div`
    position: relative;
    margin: 2rem 0 2rem;
    .form-input {
        background-color: ${({isLight}) => isLight ? "#eee" : "#262626"} ;
        border: none;
        padding: 1.5rem 2rem;
        width: 100%;
        height: 5rem;
        border-radius: .8rem;
        color: ${({ theme }) => theme.white};
        color: ${({isLight, theme}) => isLight ? theme.black : theme.white} ;
        &:focus {
            outline: none;
        }
        &:focus ~ .form-input-label {
            ${shrinkLabel}
        }
    }
    input[type = 'password'] {
        letter-spacing: 0.3em;
    }
    .form-input-label {
        /* color: var(--input-color); */
        font-size: 1.4rem;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 2rem;
        top: 1.5rem;
        transition: 300ms ease all;
        &.shrink {
            ${shrinkLabel}
        }
    }
    @media all and (max-width: 500px) {
        .form-input {
            font-size: 1.4rem;
        }
        /* padding: 1rem .5rem 1rem 2rem; */
    }
`