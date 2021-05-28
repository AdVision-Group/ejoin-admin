import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainContainer = styled(motion.main)`
    display: grid;
    grid-template-columns: 28rem 1fr;
    background-color: #fff;
    min-height: 100vh;
`

export const AsideContainer = styled(motion.section)`
    position: fixed;
    width: 28rem;
    height: 100%;
    z-index: 999;
    /* left: -35rem; */
    left: ${({isOpen}) => isOpen ? "0" : "-28rem"};
    transition: left 0.2s ease-in-out;


    @media only screen and (min-width: ${({theme}) => theme['blog-sm']}) { 
        left: 0;
    }
`


export const SectionContainer = styled(motion.section)`
    grid-column: 1/3;    
    padding: 5rem 1.5rem;
    overflow: hidden;

    @media only screen and (min-width: ${({theme}) => theme['blog-sm']}) { 
        grid-column: 2/3;    
    }
`

export const HamButton = styled.button`
    position: absolute;
    background-color: #000000;
    background-color: ${({isLight, theme}) => isLight ? theme.primary : "#000"};
    padding: 1rem;
    top: ${({isOpen}) => isOpen ? "0" : "1rem"};
    right: ${({isOpen}) => isOpen ? "-2rem" : "-6.5rem"};
    transition: right 0.2s ease-in-out,
                top .2s ease-in-out;
    border-radius: .5rem;

    label {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        visibility: hidden;
    }

    @media only screen and (min-width: ${({theme}) => theme['blog-sm']}) { 
        display: none;    
    }
`

export const Ham = styled.div`
    position: relative;
    width: 3rem;
    height: 2.6rem;

    div {
        /* background-color: ${({theme}) => theme.primary}; */
        background-color: ${({isLight, theme}) => isLight ? "#fff" : theme.primary};
        position: absolute;
        width: 100%;
        height: 2px;
        transition: all 0.2s ease-out;

        :nth-of-type(1) {
            /* transform: rotateX('angle'); */
            top: ${({isOpen}) => isOpen ? "50%" : "unset"};
            transform: ${({isOpen}) => isOpen ? "rotateZ(45deg)" : "unset"};
        }

        :nth-of-type(2) {
            top: 50%;
            transform: translateY(-50%);
            display: ${({isOpen}) => isOpen ? "none" : "block"};
        }

        :nth-of-type(3) {
            bottom: 0;
            top: ${({isOpen}) => isOpen ? "50%" : "unset"};
            transform: ${({isOpen}) => isOpen ? "rotateZ(-45deg)" : "unset"};

        }

    }
`