import styled, {css} from 'styled-components'
import { motion } from 'framer-motion'



export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;

    svg {
        width: 12rem;
        height: 12rem;
    }
`

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 2rem;

    @media only screen and (min-width: ${({theme}) => theme['dashboard-m']}) { 
        font-size: 4.5rem;
        margin-bottom: unset;

    }
`


export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.dashboardHeaderBackgroundColor};
    color: ${({theme}) => theme.dashboardHeaderColor};


`

export const ContentContainer = styled(motion.div)`
    cursor: pointer;
    /* position: relative; */

`
const linkContainer = css`
    position: relative;

    overflow: hidden;
    min-height: 30rem;
    height: 100%;

    ${ContentContainer} {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const OperatorContainer = styled.div`
    background-color: ${({ theme }) => theme.dashboardOperatorBackgroundColor};
    color: ${({ theme }) => theme.dashboardProductColor};

    ${linkContainer};
`

export const ProductContainer = styled.div`
    ${linkContainer};
    background-color: ${({ theme }) => theme.dashboardProductBackgroundColor};
    color: ${({ theme }) => theme.dashboardProductColor};

    ${ContentContainer} {
        display: flex;
        flex-direction: column;

        h2 {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 6rem;


            @media only screen and (min-width: ${({theme}) => theme['dashboard-m']}) { 
                font-size: 4.5rem;
                margin-bottom: 6rem;
            }
        }

    }
`

export const OperatorLogoContainer = styled.img`
    width: 15rem;
    height: 10rem;
    object-fit: contain;

    @media only screen and (min-width: ${({theme}) => theme['dashboard-m']}) { 
        width: 25rem;
        height: 15rem;
    }
`

export const OperatorBackgroundImage = styled.img`
    position: absolute;
    width: 110%;
    height: 105%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
`

export const ProductLogoContainer = styled.img`
    width: 8rem;
    height: 8rem;
    object-fit: contain;

    @media only screen and (min-width: ${({theme}) => theme['dashboard-m']}) { 
        width: 12rem;
        height: 12rem;
    }
`

export const ProductBackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    /* height: 105%; */
    /* top: 0; */
    bottom: 0;
    right: 0;
    left: 0;
    object-fit: contain;
    object-position: center;
`

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;

    @media only screen and (min-width: ${({theme}) => theme['dashboard-sm']}) { 
        grid-template-columns: 1fr 1fr;

        ${HeaderContainer} {
            grid-column: 1/3;
        }
       
    }
`