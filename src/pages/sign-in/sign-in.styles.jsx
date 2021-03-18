import styled from 'styled-components'

export const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
`

export const SectionContainer = styled.section`
    background-color: ${({ theme }) => theme.backgroundSecondary};
    padding: 4rem 6rem;
    border-radius: 2.5rem;

    h1 {
        font-weight: lighter;
        text-align: center;
        margin-bottom: 1rem
    }
`