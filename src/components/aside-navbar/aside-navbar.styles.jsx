import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AsideContainer = styled(motion.aside)`
    /* position: fixed; */
    width: 100%;
    height: 100%;
    background-color: #000000;
    /* min-height: 100vh; */
    padding: 4rem 0;
`

export const Header = styled.div`
    padding-bottom: 4rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid #707070;
    display: flex;
    justify-content: center;

    img {
        width: 40%;
        object-fit: contain;
    }
`

export const LoginContainer = styled.div`
    text-align: center;
    margin-bottom: 4rem;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 1.6rem;

        svg {
            font-size: 2.5rem;
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
    padding: 1.5rem 3rem;
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