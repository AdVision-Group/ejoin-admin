import styled from 'styled-components'
import { motion } from 'framer-motion'

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:    "h h"
                            "o p";

`

export const ContentContainer = styled(motion.div)`
    cursor: pointer;
`

export const HeaderContainer = styled.header`
    grid-area: h;
    justify-self: center;
    align-self: center;

    div {
        margin-bottom: 5rem;
        display:flex;
        justify-content: center;
    }

    h1 {
        font-size: 6rem;
        text-align: center;
    }
`

export const OperatorContainer = styled.div`
    grid-area: o;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    overflow: hidden;

    ${ContentContainer} {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 40rem;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`

export const ProductContainer = styled.div`
    grid-area: p;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    overflow: hidden;

    ${ContentContainer} {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        h2 {
            position: absolute;
            font-size: 6rem;
            font-weight: bolder;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`