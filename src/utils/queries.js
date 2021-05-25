import {gql} from '@apollo/client'

export const GET_POSTS = gql`
    query {
        posts {
            id
            type
            name
            date
            description
            slug
            draft
            html
        }
    }
` 

export const GET_ORDERS = gql`
    query getOrders($status: STATUSCODES){
        orders(status: $status) {
            id
            status
            productID
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
            }
        }
    }
}
`