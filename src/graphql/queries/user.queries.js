import { gql } from "@apollo/client"

export const GET_USER_NAME = gql`
	query GetUserName($id: String!) {
		account(id: $id) {
			id
			name
		}
	}
`
