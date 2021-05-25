import styled from 'styled-components'

export const ProductOrdersContainer = styled.div`
    color: #000;
    max-width: 97rem;
    margin: 3rem auto;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
        font-size: 1.6rem;
    }
`

export const UserInfoContainer = styled.div`
    /* background-color: ${({theme}) => theme.productPageContainerBackgroundColor}; */
    box-shadow: 0 .3rem .6rem 0 rgba(0, 0, 0, 0.16);
    border-radius: 1.5rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(auto, 32rem));
    margin-bottom: 4rem;

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`

export const Container = styled.div`
    /* border: 1px solid red; */
    /* padding: 1rem; */
    margin-bottom: 1.5rem;

    p {
        :nth-of-type(1) {
            font-size: 1.4rem;
            opacity: 0.63;
        }
    }
`