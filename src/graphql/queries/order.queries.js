import { gql } from "@apollo/client"

export const GET_ORDER = gql`
	query GetOrderData($id: ID!) {
		order(id: $id) {
			id
			created_date
			productID
			status
			orderData {
				city
				country
				deliveryCountry
				deliveryCity
				deliveryPsc
				deliveryStreet
				email
				first_name
				gdpr
				isBusiness
				isDeliveryAddressDifferent
				last_name
				name
				phone
				psc
				street
				terms
				product {
					authOptions {
						qr {
							price
							value
						}
						reader {
							price
							value
						}
					}
					buyOptions {
						buy {
							price
							value
						}
					}
					cabelOptions {
						cabel {
							price
							value
						}
					}
					chargingNetworkOptions {
						charginNetwork {
							price
							value
						}
					}
					chargingOptions {
						charging {
							price
							value
						}
					}
					eleOptions {
						ele {
							price
							value
						}
					}
					enteringVoltageOptions {
						enteringVoltage {
							price
							value
						}
					}
					positionOptions {
						position {
							price
							value
						}
					}
					servicesOptions {
						service {
							price
							value
						}
					}
					smartSolutionsOptions {
						smartSolutions {
							price
							value
						}
					}
					stationsOptions {
						stations {
							price
							value
						}
					}
					wifiOptions {
						online {
							price
							tPrice
							type
							value
						}
					}
				}
				business {
					dic
					icdph
					ico
					name
					residence
				}
			}
			paymentData {
				amount
				gw_url
				id
				order_number
				state
				tokenData {
					access_token
					expires_in
					refresh_token
					token_type
				}
			}
		}
	}
`

export const GET_ORDERS = gql`
	query getOrders($status: STATUSCODES) {
		orders(status: $status) {
			id
			status
			productID
			created_date
			orderData {
				name
				email
				phone
				street
				psc
				city
				country
				isDeliveryAddressDifferent
				deliveryStreet
				deliveryPsc
				deliveryCity
				deliveryCountry
				isBusiness
				business {
					name
					ico
					dic
					icdph
				}
				product {
					chargingOptions {
						charging {
							value
							price
						}
					}
					cabelOptions {
						cabel {
							value
							price
						}
					}
					positionOptions {
						position {
							value
							price
						}
					}
					buyOptions {
						buy {
							value
							price
						}
					}
					authOptions {
						reader {
							value
							price
						}
						qr {
							value
							price
						}
					}
					wifiOptions {
						online {
							value
							price
							type
							tPrice
						}
					}
					eleOptions {
						ele {
							value
							price
						}
					}
					servicesOptions {
						service {
							value
							price
						}
					}
					stationsOptions {
						stations {
							value
							price
						}
					}
					smartSolutionsOptions {
						smartSolutions {
							value
							price
						}
					}
					chargingNetworkOptions {
						charginNetwork {
							value
							price
						}
					}
					enteringVoltageOptions {
						enteringVoltage {
							value
							price
						}
					}
				}
			}
		}
	}
`

export const GET_ORDERS_OVERVIEW = gql`
	query GetOrdersOverview($status: STATUSCODES) {
		orders(status: $status) {
			paymentData {
				state
			}
			id
			created_date
			status
			productID
			orderData {
				first_name
				last_name
			}
		}
	}
`
