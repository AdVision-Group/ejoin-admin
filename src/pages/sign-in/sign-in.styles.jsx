import styled from 'styled-components'

export const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    display: grid;
    /* place-items: center; */
    justify-items: center;
    align-items: start;
    background-color: ${({theme}) => theme.signInBackgroundColor};
`

export const SectionContainer = styled.section`
    margin-top: 2rem;
    position: relative;
    /* background-color: ${({ theme }) => theme.signInForm}; */
    padding: 2rem 2rem;
    /* border-radius: 2.5rem; */
    /* min-width: 28rem; */
    /* margin: 0 1rem; */
    width: clamp(28rem, 90%, 45rem);
    z-index: 1;

    form {
        position: relative;
        background-color: ${({ theme }) => theme.signInForm};
        padding: 1rem 2.5rem 3rem;
        @media all and (min-width: 700px) {
            ::before {
                content: "";
                position: absolute;
                top: 4rem;
                left: 6rem;
                width: 100%;
                height: 100%;
                background-color: ${({ theme }) => theme.signInForm};

                z-index: -1
            }
        }
    }

`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;

    svg {
        width: 14rem;
        height: 14rem;
    }
`

export const BackgroundImage = styled.img`
    position: absolute;
    left:0;
    bottom: 0;
    width: 100%;
    /* z-index: -1; */
`

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`