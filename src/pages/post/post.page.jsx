import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import lodash from "lodash"

import { useLoadingModal } from "../../hooks/useLoadingModal"

import Tipbox from "../../components/tipbox/tipbox.component"
import CustomInput from "../../components/custom-input/custom-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import LoadingModal from "../../components/modals/loading-modal/loading-modal.component"
import Spinner from "../../components/spinner/spinner.component"
import { Quill } from "react-quill"

import { Formik, Field } from "formik"

import { useQuery, useMutation } from "@apollo/client"
import {
	GET_POST_DATA,
	GET_POST_BY_TAG,
} from "../../graphql/queries/blog.queries"
import { UPDATE_BLOG_POST } from "../../graphql/mutations/blog.mutations"

import {
	NewBlogContainer,
	ContentTextare,
	UploadButton,
	ImageContainer,
	CheckBoxContainer,
	CheckBoxHeader,
	UploadedImages,
	Heading3,
	DeleteButton,
} from "./post.styles"

const getChangedValues = (values, initialValues) => {
	return Object.entries(values).reduce((acc, [key, value]) => {
		const hasChanged = initialValues[key] !== value

		if (hasChanged) {
			acc[key] = value
		}

		return acc
	}, {})
}

const PostPage = ({ tag, isLight }) => {
	const { id } = useParams()
	const history = useHistory()
	const [uploadedImages, setUploadedImages] = useState([])
	const [selectedIndex, setSelectedIndex] = useState(0)

	const { data: postData, loading: postLoading } = useQuery(GET_POST_DATA, {
		variables: {
			id: id,
		},
		fetchPolicy: "no-cache",
	})

	const {
		isLoading,
		status,
		message,
		toggleLoading,
		setMessage,
		setStatus,
		resetModal,
	} = useLoadingModal()

	const [updatePost, { loading: loadingPostUpdate }] = useMutation(
		UPDATE_BLOG_POST,
		{
			onCompleted: (data) => {
				console.log("Post UPDATED")
				console.log(data)
				setStatus("SUCCESS")
				setMessage("Príspevok bol úspešne upravený")
				setTimeout(() => {
					resetModal()
					if (tag === "PRODUCT_BLOG")
						return history.push("/dashboard/product/blog")
					if (tag === "GO_BLOG")
						return history.push("/dashboard/ejoin-go/novinky")
					if (tag === "GO_REALIZATION")
						return history.push("/dashboard/ejoin-go/realizacie")
				}, 1000)
			},
			onError: (data) => {
				console.log("Error")
				console.log(data)
				setStatus("ERROR")
				setMessage("Niečo sa pokazilo...")
				setTimeout(() => {
					resetModal()
				}, 1000)
			},
		}
	)

	const myWidget = window.cloudinary.createUploadWidget(
		{
			cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
			folder:
				process.env.NODE_ENV === "production"
					? "ejoin-product"
					: "ejoin-product-dev",
			uploadPreset: process.env.REACT_APP_CLOUDINAY_PRESET,
		},
		(error, result) => {
			if (!error && result && result.event === "success") {
				setUploadedImages((prevValue) => [
					...prevValue,
					{
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
						tags: result.info?.tags,
						resource_type: result.info?.resource_type,
						secure_url: result.info?.secure_url,
						signature: result.info?.signature,
						thumbnail_url: result.info?.thumbnail_url,
						type: result.info?.type,
						url: result.info?.url,
						version: result.info?.version,
						version_id: result.info?.version_id,
						width: result.info?.width,
					},
				])
			}
		}
	)

	const showWidget = (e, widget) => {
		e.preventDefault()
		widget.open()
	}

	const selectImage = (e, img, idx) => {
		e.preventDefault()
		setSelectedIndex(idx)
	}

	const handleDeleteImage = (e, imgIdx) => {
		e.preventDefault()

		const arr = uploadedImages.filter((img, idx) => idx !== imgIdx)
		setUploadedImages(arr)
	}

	const handleOnSubmit = (values, { setSubmitting, resetForm }) => {
		toggleLoading(true)
		setStatus("LOADING")
		const obj = getChangedValues(values, postData.post)

		console.log("changed values")
		console.log("changed values")
		console.log(obj)

		let newBlogPostData = {
			...obj,
			id: id,
		}

		if (!lodash.isEqual(values.images, uploadedImages)) {
			newBlogPostData = {
				...newBlogPostData,
				images: uploadedImages.map((img) => {
					const newImg = lodash.omit(img, ["__typename"])
					return newImg
				}),
			}
		}

		if (newBlogPostData.image) {
			const newImageObj = lodash.omit(newBlogPostData.image, ["__typename"])
			newBlogPostData = {
				...newBlogPostData,
				image: newImageObj,
			}
		}

		updatePost({
			variables: newBlogPostData,
			refetchQueries: [
				{
					query: GET_POST_BY_TAG,
					variables: {
						tag: tag,
					},
				},
			],
		})

		setSubmitting(false)
	}

	useEffect(() => {
		if (postLoading) return
		if (!postData) return

		const imageIndex = postData?.post?.images?.findIndex(
			(img) => img.public_id === postData.post.image.public_id
		)

		setUploadedImages(postData?.post?.images || [])
		setSelectedIndex(imageIndex || 0)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [postLoading])

	useEffect(() => {
		return () => {
			setUploadedImages([])
			setSelectedIndex(0)
		}
	}, [])

	return (
		<NewBlogContainer isLight={isLight}>
			<h1>Upraviť príspevok</h1>

			{postLoading && <Spinner />}

			{isLoading && (
				<LoadingModal
					loading={loadingPostUpdate}
					message={message}
					status={status}
				/>
			)}

			{!postLoading && postData?.post && (
				<Formik
					initialValues={postData.post}
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
						return (
							<form onSubmit={handleSubmit}>
								<CustomInput
									label="Nadpis"
									light={isLight}
									type="text"
									name="title"
									handleChange={handleChange}
									onBlur={handleBlur}
									value={values.title}
								/>
								{errors.title && touched.title && errors.title}
								<CustomInput
									label="Popis"
									light={isLight}
									type="text"
									name="description"
									handleChange={handleChange}
									onBlur={handleBlur}
									value={values.description}
								/>
								{errors.description &&
									touched.description &&
									errors.description}

								<UploadButton onClick={(e) => showWidget(e, myWidget)}>
									Nahrať obrázky
								</UploadButton>

								{uploadedImages?.length > 0 && (
									<React.Fragment>
										<Heading3>
											Nahrané obrázky <Tipbox>Vyberte náhľadový obrázok</Tipbox>
										</Heading3>
										<UploadedImages>
											{uploadedImages.map((image, idx) => (
												<ImageContainer
													key={idx}
													isSelected={selectedIndex === idx}
													onClick={(e) => {
														handleChange({
															...e,
															target: {
																...e.target,
																name: "image",
																value: image,
															},
														})
														selectImage(e, image, idx)
													}}
												>
													<DeleteButton
														onClick={(e) => handleDeleteImage(e, idx)}
													>
														X
													</DeleteButton>
													<img alt={idx} key={idx} src={image.secure_url} />
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
												isLight={isLight}
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
									<h3>
										Uverejniť na: <Tipbox>Vyberte aspoň 1 možnosť</Tipbox>
									</h3>
								</CheckBoxHeader>
								<CheckBoxContainer aria-labelledby="checkbox-group">
									<label>
										<Field type="checkbox" name="tags" value="PRODUCT_BLOG" />
										<span>Produkt blog</span>
									</label>
									<label>
										<Field
											type="checkbox"
											name="tags"
											value="PRODUCT_REALIZATION"
										/>
										<span>Produkt realizacie</span>
									</label>
									<label>
										<Field type="checkbox" name="tags" value="GO_BLOG" />
										<span>Go novinky</span>
									</label>
									<label>
										<Field type="checkbox" name="tags" value="GO_REALIZATION" />
										<span>Go realizacie</span>
									</label>
								</CheckBoxContainer>

								<CheckBoxContainer>
									<label>
										<Field type="checkbox" name="draft" />
										<span>Draft</span>
									</label>
								</CheckBoxContainer>

								<CustomButton type="submit" disabled={isSubmitting}>
									Vytvoriť
								</CustomButton>
							</form>
						)
					}}
				</Formik>
			)}
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
)

// Redo button icon component for Quill editor
const CustomRedo = () => (
	<svg viewBox="0 0 18 18">
		<polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
		<path
			className="ql-stroke"
			d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
		/>
	</svg>
)

// Undo and redo functions for Custom Toolbar
function undoChange() {
	this.quill.history.undo()
}
function redoChange() {
	this.quill.history.redo()
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size")
Size.whitelist = ["extra-small", "small", "medium", "large"]
Quill.register(Size, true)

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font")
Font.whitelist = [
	"arial",
	"comic-sans",
	"courier-new",
	"georgia",
	"helvetica",
	"lucida",
]
Quill.register(Font, true)

// Modules object for setting up the Quill editor
const modules = {
	toolbar: {
		container: "#toolbar",
		handlers: {
			undo: undoChange,
			redo: redoChange,
		},
	},
	history: {
		delay: 500,
		maxStack: 100,
		userOnly: true,
	},
}

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
	"code-block",
]

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
)

export default PostPage
