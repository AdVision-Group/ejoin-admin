import styled from 'styled-components'

export const MainContainer = styled.main`
    display: grid;
    width: 100%;
    min-height: 100vh;
    place-items: center; 
`
export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageContainer = styled.div`
    margin-bottom: 2rem;

    svg {
        width: 25rem;
        height: auto;
    }
`

export const Title = styled.h1`
    font-size: 6rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
`