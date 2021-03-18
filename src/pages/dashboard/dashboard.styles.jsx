import styled from 'styled-components'

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:    "h h"
                            "o p";
`

export const HeaderContainer = styled.header`
    grid-area: h;
    padding: 5rem;
    /* height: 40rem; */
`

export const OperatorContainer = styled.div`
    grid-area: o;
    background-color: gray;

`

export const ProductContainer = styled.div`
    grid-area: p;
    background-color: lightgray;

`