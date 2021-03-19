import styled from 'styled-components'
// import CustomLink from '../custom-link/custom-link.component'
import { motion } from 'framer-motion'


export const ArticleContainer = styled(motion.article)`
    /* scroll-snap-align: start;
    display: inline-flex;
    flex-direction: column; */
    width: 32rem;
    min-width: 32rem;
    border-radius: 2.5rem;
    background-color: #272727;
    box-shadow: 1rem 3rem 1.5rem 0 rgba(0,0,0, 0.16);

    @media all and (max-width: 1000px) {
        width: 30rem;
        min-width: 30rem;
        /* height: 47rem;*/


        @media all and (max-width: 500px) {
            width: 28rem;
            min-width: 28rem;

        }
    }
`

export const ArticleHeader = styled.header`
    img {
        border-radius: 2.5rem 2.5rem 0 0;
    }
`

export const HeaderContainer = styled.div`
    background-color: #323232;
    padding: 1rem 2rem;
    height: 7rem;
    display: flex;
    align-items: center;

    h3 {
        font-size: 1.6rem;
        /* display: flex;
        align-items: center; */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;

        /* text-align: center; */

        @media all and (max-width: 500px) {
            font-size: 1.2rem;

        }
    }
`

export const ImageContainer = styled(motion.div)`
    /* overflow: hidden; */

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const ArticleBody = styled.div`
    border-radius: 0 0 2.5rem 2.5rem;
    /* height: 100%; */

    padding: 2rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid #707070;


    p {
        /* margin-bottom: 2rem;
        height: 9rem; */
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        opacity: 0.72;

        margin-bottom: 4rem;
    }

    /* @media all and (max-width: 1000px) {
        font-size: 1rem;
        height: 15rem;

        @media all and (max-width: 500px) {
            height: 12rem;
            padding: 1rem 2rem;

            p {
                margin-bottom: 1rem;

            }
        }
    } */
`

export const ShowMoreButton = styled.a`
    display: block;
    color: ${({ theme }) => theme.white};

`