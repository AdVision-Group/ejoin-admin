import styled from 'styled-components'
import ReactQuill from 'react-quill';

import CustomButton from '../../components/custom-button/custom-button.component'

export const FormContainer = styled.form`
    padding: 5rem 0 0;
`

export const Header = styled.div`
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

`


export const ColContainer = styled.div`
    /* background-color: gray; */

`


export const RowContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    /* grid-gap: 3rem; */

    @media only screen and (min-width: ${({theme}) => theme['new-blog-m']}) { 
        grid-template-columns: 1fr 1fr;
    }

    ${ColContainer} {
        &:nth-of-type(2) {
            margin-top: 2rem;
            @media only screen and (min-width: ${({theme}) => theme['new-blog-m']}) { 
                margin-left: 2rem;
            }
        }
    }
`

export const CustomImageButton = styled.div`
    background-color: ${({ theme }) => theme.backgroundSecondary};
    height: 30rem;
    position: relative;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #444444;
    }

    input[type="file"] {
        display: none;
    }

    label {
        cursor: pointer;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ContentTextare = styled(ReactQuill)`
    height: 50rem;
    color: #fff;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    /* color: var(--input-color); */
    
    .ql-container, .ql-toolbar {
        border: none;
    }
`

export const AddButton = styled(CustomButton)`
    position: fixed;
    top: 1rem;
    right: 1.5rem;
    font-size: 1.6rem;
    width: 15rem;
    z-index: 99;

    @media only screen and (min-width: ${({theme}) => theme['blog-sm']}) { 
        position: relative;    
    }
`