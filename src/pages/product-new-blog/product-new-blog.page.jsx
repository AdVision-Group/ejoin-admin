import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'

import {useMutation} from '@apollo/client'
import {CREATE_BLOG_POST} from '../../graphql/mutations/blog.mutations'
import {GET_POST_BY_TAG} from '../../graphql/queries/blog.queries'

import CustomInput from '../../components/custom-input/custom-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import LoadingModal from '../../components/modals/loading-modal/loading-modal.component'
import { Quill } from 'react-quill'

import { Formik, Field } from 'formik';
import {FORM_INITIAL_DATA} from '../../utils/orders.utils'

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


const ProductPage = () => {
    const history = useHistory()
    const [uploadedImages, setUploadedImages] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [createPost, {data, loading}] = useMutation(CREATE_BLOG_POST, {
        onCompleted: (data) => {
            console.log("Post CREATED")
            console.log(data)
            history.push('/dashboard/product/blog')
        },
        refetchQueries: [{
            query: GET_POST_BY_TAG,
            variables: {
                tag: "PRODUCT_BLOG"
            }
        }]
    })

    const handleOnSubmit = (values, { setSubmitting, resetForm  }) => {
        const newBlogPostData = {
            ...values,
            images: uploadedImages,
            image: uploadedImages[selectedIndex]
        }

        createPost({
            variables: newBlogPostData
        })

        resetForm()
        setUploadedImages([])
        setSelectedIndex(0)

        setSubmitting(false);

    }

    const myWidget = window.cloudinary.createUploadWidget({
        cloudName: process.env.REACT_APP_CLOUDINARY_NAME, 
        folder: process.env.NODE_ENV === 'production' ? "ejoin-product" : "ejoin-product-dev",
        uploadPreset: process.env.REACT_APP_CLOUDINAY_PRESET}, (error, result) => { 
            if (!error && result && result.event === "success") { 
                setUploadedImages(prevValue => [...prevValue, {
                    access_mode: result.info?.access_mode,
                    asset_id: result.info?.asset_id,
                    batchId: result.info?.batchId,
                    bytes: result.info?.bytes,
                    created_at: result.info?.created_at,
                    etag: result.info?.etag,
                    format: result.info?.format,
                    height: result.info?.height,
                    id: result.info?.id,
                    original_filename: result.info?.original_filename,
                    path: result.info?.path,
                    placeholder: result.info?.placeholder,
                    public_id: result.info?.public_id,
                    tags:  result.info?.tags,
                    resource_type: result.info?.resource_type,
                    secure_url: result.info?.secure_url,
                    signature: result.info?.signature,
                    thumbnail_url: result.info?.thumbnail_url,
                    type: result.info?.type,
                    url: result.info?.url,
                    version: result.info?.version,
                    version_id: result.info?.version_id,
                    width: result.info?.width,
                }])
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


    useEffect(() => {
        return () => {
            setUploadedImages([])
            setSelectedIndex(0)
        }
    }, [])

    return (
        <NewBlogContainer>
            <h1>Vytvoriť nový príspevok</h1>

            {loading && (
                <LoadingModal/>
            )}

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
                }) => {
                    console.log(values)
                    console.log(uploadedImages)



                    return (
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
                                            <ImageContainer isSelected={selectedIndex === idx} onClick={(e) => {
                                                handleChange({
                                                    ...e,
                                                    target: {
                                                        ...e.target,
                                                        name: "image",
                                                        value: image
                                                    }
                                                })
                                                selectImage(e, image, idx)
                                            }}>
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
                    )
                }}
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