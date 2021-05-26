import styled from 'styled-components'
// import CustomLink from '../custom-link/custom-link.component'
import { motion } from 'framer-motion'
import CustomButton from '../custom-button/custom-button.component'


export const ArticleContainer = styled(motion.article)`
    width: 28rem;
    border-radius: 2.5rem;
    /* background-color: #272727; */
    background-color: ${({isLight}) => isLight ? "#fff" : "#272727"};
    box-shadow: ${({isLight}) => isLight ? "0 .3rem .6rem 0 rgba(0, 0, 0, 0.16)" : "1rem 3rem 1.5rem 0 rgba(0,0,0, 0.16)"};
    color: ${({isLight}) => isLight ? "#000" : "#fff"};
    margin-bottom: 3rem;

`

export const ArticleHeader = styled.header`
    img {
        border-radius: 2.5rem 2.5rem 0 0;
    }
`

export const HeaderContainer = styled.div`
    /* background-color: #323232; */
    background-color: ${({isLight}) => isLight ? "#eee" : "#323232"};

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
    }
`

export const ImageContainer = styled(motion.div)`
    /* overflow: hidden; */
    height: 20rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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

`

export const OptionsContainer = styled.a`
    width: 100%;
    --gap: 4rem;
    display: inline-flex;
    /* flex-wrap: wrap; */
    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
    width: calc(100% + var(--gap));

    & > * {
        margin: var(--gap) 0 0 var(--gap);
    }

`

export const DeleteButton = styled(CustomButton)`
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.red};
    color: ${({theme}) => theme.red};
    font-size: 1.6rem;
`

export const OpenButton = styled(CustomButton)`
    /* background-color: transparent;
    border: 1px solid ${({theme}) => theme.red};
    color: ${({theme}) => theme.red}; */
    font-size: 1.6rem;
`