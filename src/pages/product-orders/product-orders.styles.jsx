import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'

import {CustomScrollbarWhiteStyles} from '../../global.styles'

export const ProductOrdersContainer = styled.div`
    padding-top: 2rem;
    color: ${({theme}) => theme.productPageFontColor};

    h1 {
        margin-bottom: 2rem;
    }
`

export const ProductsContainer = styled.div`
    /* padding: 1.5rem; */
    background-color: ${({theme}) => theme.productPageContainerBackgroundColor};
    max-width: 97rem;
    margin: 0 auto;
    border-radius: 1.5rem;
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(auto, 32rem));

`

export const EmptyContainer = styled.button`
    background-color: ${({theme}) => theme.productContainerBackgroundColor};
    padding: 2rem;
    font-size: 10rem;
    text-align: center;
    border-radius: 1.5rem;
    display: block;
    cursor: pointer;
    width: 100%;
    margin-bottom: 2rem;
`

export const ProductOverviewContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 2rem;
    background-color: ${({theme}) => theme.productContainerBackgroundColor};
    box-shadow: 0 .3rem .6rem 0 rgba(0, 0, 0, 0.03);
    border-radius: 1.5rem;
    overflow: hidden;
    /* max-width: 32rem; */
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 15rem;
    /* background-color: #eee; */
`

export const ContentContainer = styled.div`
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;


    h2 {
        align-self: start;
        text-transform: uppercase;
    }

    h3 {
        align-self: start;
        text-align: end;
        font-size: 1.6rem;
        margin-top: .7rem;
    }


    ul {
        grid-column: 1/3;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: .83;
        align-self: end;


        li {
            margin-bottom: .5rem;
            text-align: center;
        }
    }
`

export const CenterSpinner = styled.div`
    padding: 4rem;
    display: flex;
    justify-content: center;
`

export const Header = styled.div`
    max-width: 97rem;
    margin: 0 auto;
`

export const TabsUl = styled.ul`
    background-color: ${({theme}) => theme.productPageContainerBackgroundColor};
    /* border: 1px solid red; */
    border-radius: .5rem;
    display: flex;
    overflow: hidden;
    overflow-x: auto;
    padding: 1rem;
    max-width: 97rem;
    margin: 0 auto 2rem;

    ${CustomScrollbarWhiteStyles};
    ::-webkit-scrollbar {
        width: 10px;
        display: initial;
    }


    li {
        margin-right: 2rem;
    }
`

export const TabButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    font-weight: bolder;
    color: ${({theme}) => theme.primary};
    border-bottom: ${({isActive, theme}) => isActive ? `3px solid ${theme.primary}`: "3px solid transparent"};
`