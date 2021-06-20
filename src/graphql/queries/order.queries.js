import { gql } from "@apollo/client"

export const GET_ORDER = gql`
	query getOrder($id: ID!) {
		order(id: $id) {
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
					residence
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
