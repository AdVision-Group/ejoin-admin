import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 100%;
    max-width: 105rem;
    padding-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    --gap: 3rem;
    display: inline-flex;
    /* flex-wrap: wrap; */
    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
    width: calc(100% + var(--gap));

    & > * {
        margin: var(--gap) 0 0 var(--gap);
    }
`

export const EmptyContainer = styled(motion.div)`
    cursor: pointer;
    width: 28rem;
    min-width: 25rem;
    border-radius: 2.5rem;
    color: #fff;
    background-color: #272727;
    box-shadow: 1rem 3rem 1.5rem 0 rgba(0,0,0, 0.16);
    align-self: start;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    p {
        font-size: 30rem;
        line-height: 1
    }
`