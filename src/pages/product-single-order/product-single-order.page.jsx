import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {useQuery} from '@apollo/client'
import {
    GET_ORDER,
    GET_PRODUCT_PRICE
} from '../../utils/queries'

import {getStatusColor} from '../../utils/orders.utils'

import Spinner from '../../components/spinner/spinner.component'

import {
    ProductOrdersContainer,
    HeaderContainer,
    UserInfoContainer,
    Container
} from './product-single-order.styles'

const ProductSingleOrderPage = () => {
    const {id} = useParams()
    const [totalPrice, setTotalPrice] = useState(0)

    const {data, loading} = useQuery(GET_ORDER, {
        variables: {
            id
        }
    })

    const {data: productData, loading: productLoading, refetch} = useQuery(GET_PRODUCT_PRICE, {
        variables: {
            title: data?.order?.productID,
            locale: "en"
        },
        skip: data ? false : true
    })

    useEffect(() => {
        if(productLoading) return
        if(!productData) return
        productData?.product.data.en.configurator.map(item => {
            // console.log(item.checkBoxes)
            item.checkBoxes.map(val => {
                setTotalPrice(prevValue => prevValue + val.price)
            })
        })

    }, [productLoading])

    return (
        <ProductOrdersContainer>
            {loading && <Spinner/>}

            {data && (
                <HeaderContainer statusColor={getStatusColor(data.order.status)}>
                    <h1>{data.order.productID}</h1>
                        <h2>{(totalPrice / 100 ).toFixed(2)}€</h2>
                    <h2>{data.order.status}</h2>
                </HeaderContainer>
            )}

            {data && (
                <UserInfoContainer>
                    <div>
                        <h2>Informácie o zákazníkovi</h2>
                        <Container>
                            <p>Meno a Priezvisko</p>
                            <p>{data.order.orderData.name}</p>
                        </Container>
                        <Container>
                            <p>Tel.</p>
                            <p>{data.order.orderData.phone}</p>
                        </Container>
                        <Container>
                            <p>E-mail</p>
                            <p>{data.order.orderData.email}</p>
                        </Container>
                    </div>
                    <div>
                        <h2>Adresa</h2>
                        <Container>
                            <p>Ulica</p>
                            <p>{data.order.orderData.street}</p>
                        </Container>
                        <Container>
                            <p>Mesto.</p>
                            <p>{data.order.orderData.city}</p>
                        </Container>
                        <Container>
                            <p>PSČ</p>
                            <p>{data.order.orderData.psc}</p>
                        </Container>
                        <Container>
                            <p>Štát</p>
                            <p>{data.order.orderData.country}</p>
                        </Container>
                    </div>
                </UserInfoContainer>
            )}
            {data && (
                <UserInfoContainer>
                    <div>
                        <h2>Informacie o objednávke</h2>
                        {
                            Object.keys(data.order.orderData.product).map((val, idx) => {
                                if(val === "__typename") return
                                return (
                                    <Container key={idx}>
                                        <p>{val}</p>
                                        {
                                            Object.keys(data.order.orderData.product[val]).map((v, index) => {
                                                if(v === "__typename") return
                                                return (
                                                    <React.Fragment key={index}>
                                                        <p>{data.order.orderData.product[val][v].value}</p>
                                                        {data.order.orderData.product[val][v].value && <p>{(data.order.orderData.product[val][v].price / 100).toFixed(2)}€</p>}
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </Container>
                                )
                            })
                        }

                    </div>
                </UserInfoContainer>
            )}
        </ProductOrdersContainer>
    )
}

export default ProductSingleOrderPage
