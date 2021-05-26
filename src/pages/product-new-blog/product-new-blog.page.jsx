import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
// import {useFetch} from '../../hooks/usefetch'

import {useMutation} from '@apollo/client'
import {CREATE_BLOG_POST} from '../../graphql/mutations/blog.mutations'

// import {useNewsContext} from '../../context/news/news.context'

// import PostsContainer from '../../components/posts-container/posts-container.compontent'

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
    CheckBoxHeader,
    UploadedImages,
    Heading3
} from './product-new-blog.styles'


const FORM_INITIAL_DATA = {
    title: "",
    tags: [],
    description: "",
    content: "",
    draft: false
}


const ProductPage = () => {
    // const match = useRouteMatch()
    const [uploadedImages, setUploadedImages] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [createPost, {data, loading}] = useMutation(CREATE_BLOG_POST)

    const myWidget = window.cloudinary.createUploadWidget({
        cloudName: process.env.REACT_APP_CLOUDINARY_NAME, 
        folder: "ejoin-product",
        uploadPreset: process.env.REACT_APP_CLOUDINAY_PRESET}, (error, result) => { 
            if (!error && result && result.event === "success") { 
                // console.log('Done! Here is the image info: ', result.info); 
                // console.log(result)
                setUploadedImages(prevValue => [...prevValue, result.info])
            }
        },
    )

    const showWidget = (e, widget) => {
        e.preventDefault()
        widget.open()
    }

    const selectImage = (e, img, idx) => {
        e.preventDefault()
        setSelectedIndex(idx)
    }

    const handleOnSubmit = (values, { setSubmitting, resetForm  }) => {
        const newBlogPostData = {
            ...values,
            image: {
                access_mode: uploadedImages[selectedIndex]?.access_mode,
                asset_id: uploadedImages[selectedIndex]?.asset_id,
                batchId: uploadedImages[selectedIndex]?.batchId,
                bytes: uploadedImages[selectedIndex]?.bytes,
                created_at: uploadedImages[selectedIndex]?.created_at,
                etag: uploadedImages[selectedIndex]?.etag,
                format: uploadedImages[selectedIndex]?.format,
                height: uploadedImages[selectedIndex]?.height,
                id: uploadedImages[selectedIndex]?.id,
                original_filename: uploadedImages[selectedIndex]?.original_filename,
                path: uploadedImages[selectedIndex]?.path,
                placeholder: uploadedImages[selectedIndex]?.placeholder,
                public_id: uploadedImages[selectedIndex]?.public_id,
                tags:  uploadedImages[selectedIndex]?.tags,
                resource_type: uploadedImages[selectedIndex]?.resource_type,
                secure_url: uploadedImages[selectedIndex]?.secure_url,
                signature: uploadedImages[selectedIndex]?.signature,
                thumbnail_url: uploadedImages[selectedIndex]?.thumbnail_url,
                type: uploadedImages[selectedIndex]?.type,
                url: uploadedImages[selectedIndex]?.url,
                version: uploadedImages[selectedIndex]?.version,
                version_id: uploadedImages[selectedIndex]?.version_id,
                width: uploadedImages[selectedIndex]?.width,
            },
            images: uploadedImages.map(image => ({
                access_mode: image?.access_mode,
                asset_id: image?.asset_id,
                batchId: image?.batchId,
                bytes: image?.bytes,
                created_at: image?.created_at,
                etag: image?.etag,
                format: image?.format,
                height: image?.height,
                id: image?.id,
                original_filename: image?.original_filename,
                path: image?.path,
                placeholder: image?.placeholder,
                public_id: image?.public_id,
                tags:  image?.tags,
                resource_type: image?.resource_type,
                secure_url: image?.secure_url,
                signature: image?.signature,
                thumbnail_url: image?.thumbnail_url,
                type: image?.type,
                url: image?.url,
                version: image?.version,
                version_id: image?.version_id,
                width: image?.width,
            }))
        }

        console.log(newBlogPostData)

        createPost({
            variables: newBlogPostData
        })

        resetForm()
        setUploadedImages([])
        setSelectedIndex(0)

        setSubmitting(false);

    }

    useEffect(() => {
        return () => {
            setUploadedImages([])
            setSelectedIndex(0)
        }
    }, [])
    console.log(data)

    return (
        <NewBlogContainer>
            <h1>New Blog post page</h1>

            <Formik
                initialValues={FORM_INITIAL_DATA}
                // validate={}
                onSubmit={handleOnSubmit}
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
                            name="title"
                            handleChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
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

                        {uploadedImages.length > 0 && (
                            <React.Fragment>
                                <Heading3>Nahrané obrázky</Heading3>
                                <UploadedImages>
                                    {uploadedImages.map((image, idx) => (
                                        <ImageContainer isSelected={selectedIndex === idx} onClick={(e) => selectImage(e, image, idx)}>
                                            <img key={idx} src={image.secure_url}/>
                                        </ImageContainer>
                                    ))}
                                </UploadedImages>
                            </React.Fragment>
                        )}

                        <Field name="content" type="text">
                            {({ field }) => (
                                <React.Fragment>
                                    <QuillToolbar />
                                    <ContentTextare
                                        name="content"
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

                        <CheckBoxContainer>
                            <label>
                                <Field type="checkbox" name="draft"  />
                                <span>
                                    Draft
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