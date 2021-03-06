import { gql } from "@apollo/client"

export const CREATE_POST = gql`
	mutation CreatePost(
		$name: String!
		$type: String!
		$description: String
		$html: String
		$draft: Boolean
	) {
		createPost(
			name: $name
			type: $type
			description: $description
			html: $html
			draft: $draft
		) {
			id
			name
			date
			description
			slug
			pageViews
			html
			draft
		}
	}
`

export const DELETE_POST = gql`
	mutation DeletePost($id: ID!) {
		deletePost(id: $id) {
			id
		}
	}
`

export const DELIGATE_ORDER = gql`
	mutation DeligateOrder($id: ID!, $status: STATUSCODES!) {
		deligateOrder(id: $id, status: $status) {
			status
			isOk
			message
			data {
				status
				productID
				orderData {
					name
				}
			}
		}
	}
`
