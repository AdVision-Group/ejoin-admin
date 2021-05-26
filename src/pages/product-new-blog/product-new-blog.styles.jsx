import styled from 'styled-components'
import ReactQuill from 'react-quill';
import {motion} from 'framer-motion'

export const NewBlogContainer = styled.div`
    color: #000;
    max-width: 67rem;
    margin: 0 auto;
`

export const ContentTextare = styled(ReactQuill)`
    height: 50rem;
    /* color: #fff; */
    /* background-color: ${({ theme }) => theme.backgroundSecondary}; */
    background-color: #eee ;
    margin-bottom: 2rem;
    border-radius: 0 0 1.5rem 1.5rem;

    /* color: var(--input-color); */
    
    .ql-container, .ql-toolbar {
        border: none;
    }
`

export const UploadButton = styled(motion.button)`
    color: #fff;
    background-color: ${({theme}) => theme.primary};
    border: none;
    padding: 1.5rem 2.5rem;
    border-radius: 1.5rem;
    font-weight: bolder;
    margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
    max-height: 60rem;
    margin-bottom: 2rem;

    img {
        width: 100%;
        object-fit: contain;
    }
`

export const CheckBoxHeader = styled.div`
    h3 {
        margin-bottom: 1rem;
    }
`

export const CheckBoxContainer = styled.div`
    margin-bottom: 2rem;

    label {
        cursor: pointer;
        display: flex;
        margin-bottom: 1rem;

        span {
            opacity: .63;
        }

        input {
            visibility: hidden;
            opacity: 0;
        }

        input:checked + span {
            color: ${({theme}) => theme.primary};
            font-weight: bolder;
            opacity: 1;
        }
    }
`