import { gql } from "@apollo/client"

export const GET_PRODUCT_PRICE = gql`
	query getProductPrice($title: String!, $locale: LOCALES) {
		product(title: $title, locale: $locale) {
			status
			isOk
			message
			data {
				id
				category
				en {
					configurator {
						checkBoxes {
							price
						}
					}
				}
			}
		}
	}
`
