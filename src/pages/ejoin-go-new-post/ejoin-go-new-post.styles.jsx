import styled from 'styled-components'
import ReactQuill from 'react-quill';

export const FormContainer = styled.form`
    padding: 0 3rem;
`

export const Header = styled.div`
    margin-bottom: 3rem;
`


export const ColContainer = styled.div`
    /* background-color: gray; */

`


export const RowContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;

    ${ColContainer} {
        &:nth-of-type(2) {
            margin-top: 2rem;
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
    background-color: ${({ theme }) => theme.backgroundSecondary};
    /* color: var(--input-color); */
    
    .ql-container, .ql-toolbar {
        border: none;
    }
`