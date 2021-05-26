import React, { useState } from 'react'

import {useMutation} from '@apollo/client'
import {CREATE_POST} from '../../utils/mutations'
// import {GET_POSTS} from '../../utils/queries'

import CustomInput from '../../components/custom-input/custom-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { Quill } from 'react-quill'

import {
    FormContainer,
    Header,
    RowContainer,
    ColContainer,
    ContentTextare,
    CustomImageButton,
    AddButton
} from './ejoin-go-new-post.styles'

const EjoinGoNewPost = () => {
    const [postData, setPostData] = useState({
        name: "",
        type: "news",
        description: "",
        html: "",
        draft: true
    })

    const [createPost, { data }] = useMutation(CREATE_POST)

    const handleInputChange = e => {
        const {name, value} = e.target

        console.log(name)
        console.log(value)

        setPostData(prevValue => ({
            ...prevValue,
            [name]: value
        }))

    }

    const handleSubmit = e => {
        e.preventDefault()

        // createPost({
        //     variables: postData,
        //     refetchQueries: [
        //         {
        //             query: GET_POSTS
        //         }
        //     ]
        // })
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Header>
                <h1>Novinky</h1>
                <AddButton pill>Pridať</AddButton>
            </Header>
            <RowContainer>
                <ColContainer>
                    <CustomInput
                        label="Nadpis"
                        type='text'
                        name="name"
                        value={postData.name}
                        handleChange={handleInputChange}

                    />
                    <CustomInput
                        label="Popis"
                        type='text'
                        name="description"
                        value={postData.description}
                        handleChange={handleInputChange}

                    />
                    <CustomImageButton>
                        <label for="file-upload" class="custom-file-upload">
                            Vybrať obrázok
                        </label>
                        <input id="file-upload" type="file" />
                    </CustomImageButton>
                </ColContainer>
                <ColContainer>
                    <QuillToolbar />
                    <ContentTextare
                        value={postData.html}
                        onChange={(v) => handleInputChange({
                            target: {
                                name: "html",
                                value: v
                            }
                        })}
                        modules={modules}
                        formats={formats}
                    />
                </ColContainer>
            </RowContainer>

        </FormContainer>
    )
}

const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
        <path
            className="ql-stroke"
            d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
        />
    </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
        <path
            className="ql-stroke"
            d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
        />
    </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
            redo: redoChange
        }
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
    }
};

// Formats objects for setting up the Quill editor
const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block"
];

// Quill Toolbar component
const QuillToolbar = () => (
    <div id="toolbar" className="toolbar">
        <span className="ql-formats">
            <select className="ql-size" defaultValue="medium">
                <option value="extra-small">Size 1</option>
                <option value="small">Size 2</option>
                <option value="medium">Size 3</option>
                <option value="large">Size 4</option>
            </select>
            <select className="ql-header" defaultValue="3">
                <option value="1">Heading</option>
                <option value="2">Subheading</option>
                <option value="3">Normal</option>
            </select>
        </span>
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
        </span>
        <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
        </span>
        <span className="ql-formats">
            <button className="ql-script" value="super" />
            <button className="ql-script" value="sub" />
            <button className="ql-blockquote" />
            <button className="ql-direction" />
        </span>
        <span className="ql-formats">
            <select className="ql-align" />
            <select className="ql-color" />
            <select className="ql-background" />
        </span>
        <span className="ql-formats">
            <button className="ql-link" />
            <button className="ql-image" />
            <button className="ql-video" />
        </span>
        <span className="ql-formats">
            <button className="ql-formula" />
            <button className="ql-code-block" />
            <button className="ql-clean" />
        </span>
        <span className="ql-formats">
            <button className="ql-undo">
                <CustomUndo />
            </button>
            <button className="ql-redo">
                <CustomRedo />
            </button>
        </span>
    </div>
);



export default EjoinGoNewPost

