import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
// import {useFetch} from '../../hooks/usefetch'

import {useQuery} from '@apollo/client'
import {GET_POSTS} from '../../utils/queries'

import {useNewsContext} from '../../context/news/news.context'

import PostsContainer from '../../components/posts-container/posts-container.compontent'

// import News2 from '../../images/news/new2.png'
// import News3 from '../../images/news/new3.png'
import CustomInput from '../../components/custom-input/custom-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { Quill } from 'react-quill'

import { Formik, Field } from 'formik';

import {
    NewBlogContainer,
    ContentTextare,
    UploadButton,
    ImageContainer,
    CheckBoxContainer,
    CheckBoxHeader
} from './product-new-blog.styles'


const FORM_INITIAL_DATA = {
    name: "",
    description: "",
    tags: [],
    image: {
        access_mode: '',
        asset_id: '',
        batchId: '',
        bytes: 0,
        created_at: '',
        etag: '',
        format: '',
        height: 0,
        id: '',
        original_filename: '',
        path: '',
        placeholder: false,
        public_id: "",
        resource_type: '',
        secure_url: '',
        signature: '',
        thumbnail_url: '',
        type: '',
        url: '',
        version: 0,
        version_id: '',
        width: 0,
    },
    html: "",
    draft: false
}


const ProductPage = () => {
    const match = useRouteMatch()
    const [uploadedImage, setUploadedImage] = useState(null)

    const myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'coderkin', 
        folder: "ejoin-product",
        uploadPreset: 'ejoin-images'}, (error, result) => { 
            if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log(result)
                setUploadedImage(result.info)
            }
        },
        
    )

    const showWidget = (e, widget) => {
        e.preventDefault()
        widget.open()
    }

    return (
        <NewBlogContainer>
            <h1>New Blog post page</h1>

            <Formik
                initialValues={FORM_INITIAL_DATA}
                // validate={}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    console.log({
                        ...values,
                        image: {
                            ...uploadedImage
                        }
                    })
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <CustomInput
                            label="Nadpis"
                            light={true}
                            type="text"
                            name="name"
                            handleChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.email && touched.email && errors.email}
                        <CustomInput
                            label="Popis"
                            light={true}
                            type="text"
                            name="description"
                            handleChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.password && touched.password && errors.password}

                        <UploadButton onClick={(e) => showWidget(e, myWidget)}>Upload Photo</UploadButton>

                        <ImageContainer>
                            {uploadedImage && <img src={uploadedImage.secure_url}/>}
                        </ImageContainer>

                        <Field name="html" type="text">
                            {({ field }) => (
                                <React.Fragment>
                                    <QuillToolbar />
                                    <ContentTextare
                                        name="html"
                                        type="text"
                                        value={field.value}
                                        onChange={field.onChange(field.name)}
                                        modules={modules}
                                        formats={formats}
                                    />
                                </React.Fragment>
                            )}
                        </Field>


                        <CheckBoxHeader id="checkbox-group">
                            <h3>Uverejniť na:</h3>
                        </CheckBoxHeader>
                        <CheckBoxContainer aria-labelledby="checkbox-group">
                            <label>
                                <Field type="checkbox" name="tags" value="PRODUCT_BLOG" />
                                <span>
                                    Product blog
                                </span>
                            </label>
                            <label>
                                <Field type="checkbox" name="tags" value="GO_BLOG" />
                                <span>
                                    Go novinky
                                </span>
                            </label>
                            <label>
                                <Field type="checkbox" name="tags" value="GO_REALIZATION" />
                                <span>
                                    Go realizacie
                                </span>
                            </label>
                        </CheckBoxContainer>

                        <CustomButton type="submit" disabled={isSubmitting}>
                            Vytvoriť
                        </CustomButton>
                    </form>
                )}
                </Formik>
        </NewBlogContainer>
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



export default ProductPage