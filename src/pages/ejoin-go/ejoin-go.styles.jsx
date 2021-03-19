import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainContainer = styled(motion.main)`
    display: grid;
    grid-template-columns: 40rem 1fr;
`

export const AsideContainer = styled(motion.aside)`
    position: fixed;
    width: 40rem;
    background-color: #000000;
    min-height: 100vh;
    padding: 4rem 0;
`

export const SectionContainer = styled(motion.section)`
    grid-column: 2/3;    
    padding: 5rem 0;
`

export const PostsContainer = styled.div`
    max-width: 105rem;
    display: flex;
    gap: 3rem;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 1rem; 
    margin: 0 auto 4rem;
`

export const EmptyContainer = styled(motion.div)`
    cursor: pointer;
    width: 32rem;
    min-width: 32rem;
    border-radius: 2.5rem;
    background-color: #272727;
    box-shadow: 1rem 3rem 1.5rem 0 rgba(0,0,0, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 35rem;
        line-height: 1
    }

    @media all and (max-width: 1000px) {
        width: 30rem;
        min-width: 30rem;

        @media all and (max-width: 500px) {
            width: 28rem;
            min-width: 28rem;
        }
    }
`