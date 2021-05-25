import React, {useState, useEffect} from 'react'

import {useQuery} from '@apollo/client'
import {GET_ORDERS} from '../../utils/queries'

import Spinner from '../../components/spinner/spinner.component'

import {
    ProductOrdersContainer,
    ProductsContainer,
    EmptyContainer,
    ImageContainer,
    OptionsContainer,
    ContentContainer,
    DeligateButton,
    UpdateButton,
    ProductOverviewContainer
} from './product-orders.styles'

const ProductOrderPage = () => {
    const [orders, setOrders] = useState(null)
    const [formItems, setFormItems] = useState(null)

    const {loading, error, data} = useQuery(GET_ORDERS)

    useEffect(() => {
        if(loading) return
        console.log(data)
        setOrders(data.orders)
    }, [loading, orders])

    return (
        <ProductOrdersContainer>
            <ProductsContainer>
                {/* <EmptyContainer>
                    {"+"}
                </EmptyContainer> */}
                {loading && <Spinner/>}

                {orders && orders.map(order => {
                    // console.log(order.orderData.product)
                    const productObj = order.orderData.product
                    // delete productObj["__typename"]

                    const items = Object.keys(productObj).map(val => {
                        return Object.keys(productObj[val]).map(v => {
                            // console.log(productObj[val][v])
                            return productObj[val][v].value
                        }) 
                    })
                    // console.log(items)

                    const filteredAllItems = items.map(val => val.filter(v => typeof v === "string"))
                    const filteredItems = filteredAllItems.filter(val => val.length > 0)
                    // console.log(filteredItems)

                    return (
                        <ProductOverviewContainer key={order.id}>
                            {/* <ImageContainer>
                                IMG
                            </ImageContainer> */}
                            <ContentContainer>
                                <h2>{order.productID}</h2>
                                <h3>{order.status}</h3>
                                <ul>
                                    {
                                        filteredItems.map((item, idx) => (
                                            <li key={idx}>{item[0]}</li>
                                        ))
                                    }
                                </ul>
                            </ContentContainer>
                            <OptionsContainer>
                                <UpdateButton
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: .95}}
                                >Zobrazit</UpdateButton>
                                <DeligateButton
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: .95}}
                                >Spracovat</DeligateButton>
                            </OptionsContainer>
                        </ProductOverviewContainer>
                    )
                })}

            
            </ProductsContainer>
        </ProductOrdersContainer>
    )
}

export default ProductOrderPage
