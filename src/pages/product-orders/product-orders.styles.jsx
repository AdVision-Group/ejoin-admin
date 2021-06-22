import styled from "styled-components"
import { motion } from "framer-motion"

import { CustomScrollbarWhiteStyles } from "../../global.styles"

export const ProductOrdersContainer = styled.div`
	padding-top: 2rem;
	color: ${({ theme }) => theme.productPageFontColor};

	h1 {
		margin-bottom: 2rem;
	}
`

export const ProductsContainer = styled.div`
	/* padding: 1.5rem; */
	/* background-color: ${({ theme }) =>
		theme.productPageContainerBackgroundColor}; */
	box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
	max-width: 97rem;
	margin: 0 auto;
	border-radius: 1.5rem;
	overflow: hidden;
	overflow-x: auto;

	${CustomScrollbarWhiteStyles};
	::-webkit-scrollbar {
		width: 8px;
		display: initial;
	}

	/* display: grid;
    grid-template-columns: repeat( auto-fill, minmax(auto, 32rem)); */

	table {
		border-collapse: collapse;
		width: 100%;

		th,
		td {
			min-width: 20rem;
		}

		th {
			padding: 2rem 1.5rem;
			border-bottom: 3px solid ${({ theme }) => theme.primary};
		}

		td {
			padding: 2rem 1.5rem;
			text-align: center;
		}
	}
`
export const TableRow = styled.tr`
	background-color: ${({ isSelected }) =>
		isSelected ? `hsl(66.44859813084113, 80%, 41.96078431372549%)` : "unset"};
	color: ${({ isSelected }) => (isSelected ? `#fff` : "#000")};
	font-weight: ${({ isSelected }) => (isSelected ? `bolder` : "400")};

	cursor: pointer;
	transition: all 0.2s ease-in-out;
	border: 2px solid transparent;
	:hover {
		background-color: ${({ theme }) => theme.primary};
		/* font-weight: bolder; */
	}
`

export const StatusTd = styled.td`
	color: ${({ statusColor, theme }) =>
		statusColor ? theme[statusColor] : "#000"};
`

export const CenterSpinner = styled.div`
	padding: 4rem;
	display: flex;
	justify-content: center;
`

export const Header = styled.div`
	max-width: 97rem;
	margin: 0 auto;
`

export const TabsUl = styled.ul`
	/* background-color: ${({ theme }) =>
		theme.productPageContainerBackgroundColor}; */
	box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.06);

	/* border: 1px solid red; */
	border-radius: 0.5rem;
	display: flex;
	overflow: hidden;
	overflow-x: auto;
	max-width: 97rem;
	margin: 0 auto 2rem;

	${CustomScrollbarWhiteStyles};
	::-webkit-scrollbar {
		width: 8px;
		display: initial;
	}

	li {
		margin-right: 2rem;
	}
`

export const TabButton = styled.button`
	cursor: pointer;
	background-color: transparent;
	font-weight: bolder;
	color: ${({ theme }) => theme.primary};
	border-bottom: ${({ isActive, theme }) =>
		isActive ? `4px solid ${theme.primary}` : "4px solid transparent"};
	padding: 1rem;
`

export const OptionsContainer = styled(motion.div)`
	box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.06);
	border-radius: 1.5rem;
	padding: 1.5rem;
	display: flex;
	max-width: 97rem;
	margin: 0 auto 2rem;
	justify-content: flex-end;
	flex-wrap: wrap;

	button {
		cursor: pointer;
		background-color: ${({ theme }) => theme.primary};
		padding: 1.5rem 2rem;
		margin: 1rem;
		border-radius: 0.5rem;
		color: #fff;
		font-weight: bolder;
	}
`
