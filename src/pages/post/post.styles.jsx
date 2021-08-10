import styled from "styled-components"
import ReactQuill from "react-quill"
import { motion } from "framer-motion"

export const NewBlogContainer = styled.div`
	color: ${({ isLight, theme }) => (isLight ? theme.black : theme.white)};
	max-width: 67rem;
	margin: 0 auto;
`

export const ContentTextare = styled(ReactQuill)`
	height: 50rem;
	/* color: #fff; */
	/* background-color: ${({ theme }) => theme.backgroundSecondary}; */
	background-color: #262626;
	background-color: ${({ isLight }) => (isLight ? "#eee" : "#262626")};

	margin-bottom: 2rem;
	border-radius: 0 0 1.5rem 1.5rem;

	/* color: var(--input-color); */

	.ql-container,
	.ql-toolbar {
		border: none;
	}
`

export const UploadButton = styled(motion.button)`
	color: #fff;
	background-color: ${({ theme }) => theme.primary};
	border: none;
	padding: 1.5rem 2.5rem;
	border-radius: 1.5rem;
	font-weight: bolder;
	margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
	position: relative;
	cursor: pointer;
	max-height: 20rem;
	margin: 1.5rem;
	border: ${({ isSelected, theme }) =>
		isSelected ? `3px solid ${theme.primary}` : "3px solid transparent"};

	img {
		width: 100%;
		height: 100%;
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
			opacity: 0.63;
		}

		input {
			visibility: hidden;
			opacity: 0;
		}

		input:checked + span {
			color: ${({ theme }) => theme.primary};
			font-weight: bolder;
			opacity: 1;
		}
	}
`

export const UploadedImages = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(auto, 16.75rem));
	grid-template-rows: minmax(auto, 16.75rem);
	box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
	margin-bottom: 2rem;
	border-radius: 1.5rem;
`

export const Heading3 = styled.h3`
	margin-bottom: 1rem;
`

export const DeleteButton = styled(motion.button)`
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 99999;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	font-size: 1.2rem;
`
