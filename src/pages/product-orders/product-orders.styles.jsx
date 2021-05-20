import styled, {css} from 'styled-components'

export const ProductOrdersContainer = styled.div`
    padding-top: 2rem;
    color: ${({theme}) => theme.productPageFontColor};
`

export const ProductsContainer = styled.div`
    padding: 1.5rem;
    background-color: ${({theme}) => theme.productPageContainerBackgroundColor};
    max-width: 87rem;
    margin: 0 auto;
    border-radius: 1.5rem;

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
    margin-bottom: 2rem;
    background-color: ${({theme}) => theme.productContainerBackgroundColor};
    border-radius: 1.5rem;
    overflow: hidden;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 15rem;
    /* background-color: #eee; */
`

export const ContentContainer = styled.div`
    margin: 2rem 1.5rem;
`

export const OptionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 1.5rem 2rem;

`

const buttonStyles = css`
    display: block;
    background-color: #fff;
    padding: 1rem;
`

export const DeligateButton = styled.button`
    ${buttonStyles};
`

export const UpdateButton = styled.button`
    ${buttonStyles};
`
