import styled from "styled-components"

export const ProductOrdersContainer = styled.div`
	color: #000;
	max-width: 85rem;
	margin: 3rem auto;
`

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;

	h2 {
		font-size: 1.6rem;
		color: ${({ statusColor, theme }) =>
			statusColor ? theme[statusColor] : "#000"};
	}
`

export const UserInfoContainer = styled.div`
	box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
	border-radius: 1.5rem;
	padding: 2rem;
	margin-bottom: 4rem;

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`

export const BusinessInfoContainer = styled.div`
	box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
	border-radius: 1.5rem;
	padding: 2rem;
	margin-bottom: 4rem;

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`
export const ProductInfoContainer = styled.div`
	box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
	border-radius: 1.5rem;
	padding: 2rem;
	margin-bottom: 4rem;

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`
export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(auto, 27rem));
`

export const Container = styled.div`
	/* border: 1px solid red; */

	max-width: 25rem;
	padding: 1rem 1.5rem;
	margin-bottom: 1.5rem;
	background-color: rgba(193, 214, 0, 0.1);
	border-radius: 1.5rem;

	p {
		:nth-of-type(1) {
			font-size: 1.4rem;
			/* opacity: 0.63; */
		}
	}
`

export const ValueContainer = styled.div`
	/* text-align: end; */
	/* background-color: #fff; */
	padding: 1rem 0;
	margin-top: 0.5rem;
	border-radius: 0.5rem;
	p {
		font-weight: bolder;
		:nth-of-type(1) {
			opacity: 0.83;
		}
	}
`

export const GroupTitle = styled.p`
	font-weight: bolder;
	padding: 1rem 0;
`
