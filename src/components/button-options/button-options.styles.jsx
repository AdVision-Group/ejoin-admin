import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'

export const OptionsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* margin: 0 2rem 2rem; */
    align-self: end;
    margin: ${({top, left, right, bottom}) => `${top}rem ${right}rem ${bottom}rem ${left}rem`};
`

const buttonStyles = css`
    display: block;
    background-color: transparent;
    padding: 1rem;
    border-radius: .5rem;
`

export const DeligateButton = styled(motion.button)`
    ${buttonStyles};
    margin-left: .5rem;
    border: 3px solid ${({theme, isRed}) => isRed ? theme.red : theme.primary};
    color: ${({theme, isRed}) => isRed ? theme.red : theme.primary};
    font-weight: bolder;
`

export const UpdateButton = styled(motion.button)`
    ${buttonStyles};

    margin-right: .5rem;
    border: 3px solid transparent;
    background-color: ${({theme}) => theme.primary};
    color: #fff;
    font-weight: bolder;
`
