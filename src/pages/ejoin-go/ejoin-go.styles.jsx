import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainContainer = styled(motion.main)`
    display: grid;
    grid-template-columns: 28rem 1fr;
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

    @media only screen and (min-width: ${({theme}) => theme['blog-sm']}) { 
        grid-column: 2/3;    
    }
`

export const HamButton = styled.button`
    position: absolute;
    background-color: #000000;
    padding: 1rem;
    top: ${({isOpen}) => isOpen ? "0" : "1rem"};
    right: ${({isOpen}) => isOpen ? "-2rem" : "-8rem"};
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
        background-color: ${({theme}) => theme.primary};
        position: absolute;
        width: 100%;
        height: 2px;

        :nth-of-type(1) {

        }

        :nth-of-type(2) {
            top: 50%;
            transform: translateY(-50%);
        }

        :nth-of-type(3) {
            bottom: 0;
        }

    }
`