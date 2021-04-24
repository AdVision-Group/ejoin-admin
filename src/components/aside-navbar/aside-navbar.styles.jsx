import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AsideContainer = styled(motion.aside)`
    position: fixed;
    width: 40rem;
    background-color: #000000;
    min-height: 100vh;
    padding: 4rem 0;
`

export const Header = styled.div`
    padding-bottom: 4rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid #707070;
    display: flex;
    justify-content: center;
`

export const LoginContainer = styled.div`
    text-align: center;
    margin-bottom: 7rem;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 1.8rem;

        svg {
            font-size: 3rem;
            margin-right: 1rem;
        }

        span {
            font-size: 1.2rem;
            font-weight: lighter;
            margin-right: 2rem;
        }
    }


`

export const Navbar = styled.ul`
    /* display: flex;
    flex-direction: column;
    align-items: center; */

    li {

    }
`

export const MenuItem = styled.li`
    font-size: 1.8rem;
    font-weight: bolder;
    width: 100%;
    padding: 3rem 6rem;
    transition: all .2s ease-in-out;
    color: #fff;
    background-color: ${({ theme, isActive }) => isActive ? theme.primary : "unset"};

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-items: center;

    &:hover {
        background-color: ${({ theme }) => theme.primary};
    }
`

export const LogoutContainer = styled.div`
    width:100%;
    position: absolute;
    bottom: 0;

    svg {
        font-size: 4rem;
    }
`