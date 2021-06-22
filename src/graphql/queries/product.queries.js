import { gql } from "@apollo/client"

export const GET_PRODUCTS = gql`
	query {
		products {
			en {
				id
				title
				configurators {
					checkBoxes {
						price
						typeOptions {
							price
						}
					}
				}
			}
			sk {
				id
				title
				configurators {
					checkBoxes {
						price
						typeOptions {
							price
						}
					}
				}
			}
		}
	}
`
