import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {useQuery} from '@apollo/client'
import {
    GET_ORDER,
    GET_PRODUCT_PRICE
} from '../../utils/queries'

import {
    getStatusColor,
    getStatusTranslate,
    getConfiguratorDataTranslate
} from '../../utils/orders.utils'

import Spinner from '../../components/spinner/spinner.component'

import {
    ProductOrdersContainer,
    HeaderContainer,
    UserInfoContainer,
    Container,
    ValueContainer,
    ProductInfoContainer,
    GridContainer,
    GroupTitle,
    BusinessInfoContainer
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

    console.log(data)

    return (
        <ProductOrdersContainer>
            {loading && <Spinner/>}

            {data && (
                <HeaderContainer statusColor={getStatusColor(data.order.status)}>
                    <h1>{data.order.productID}</h1>
                        <h2>{(totalPrice / 100 ).toFixed(2)}€</h2>
                    <h2>{getStatusTranslate(data.order.status)}</h2>
                </HeaderContainer>
            )}

            {data && (
                <UserInfoContainer>
                    <h2>Informácie o zákazníkovi</h2>
                    <GridContainer>
                        <Container>
                            <p>Meno a Priezvisko</p>
                            <GroupTitle>{data.order.orderData.name}</GroupTitle>
                        </Container>
                        <Container>
                            <p>Tel.</p>
                            <GroupTitle>{data.order.orderData.phone}</GroupTitle>
                        </Container>
                        <Container>
                            <p>E-mail</p>
                            <GroupTitle>{data.order.orderData.email}</GroupTitle>
                        </Container>
                    </GridContainer>
                </UserInfoContainer>
            )}

            {data && (
                <UserInfoContainer>
                        <h2>Adresa</h2>
                        <GridContainer>
                            <Container>
                                <p>Ulica</p>
                                <GroupTitle>{data.order.orderData.street}</GroupTitle>
                            </Container>
                            <Container>
                                <p>Mesto.</p>
                                <GroupTitle>{data.order.orderData.city}</GroupTitle>
                            </Container>
                            <Container>
                                <p>PSČ</p>
                                <GroupTitle>{data.order.orderData.psc}</GroupTitle>
                            </Container>
                            <Container>
                                <p>Štát</p>
                                <GroupTitle>{data.order.orderData.country}</GroupTitle>
                            </Container>
                        </GridContainer>
                </UserInfoContainer>
            )}


            {data && data.order.orderData.isDeliveryAddressDifferent && (
                <BusinessInfoContainer>
                        <h2>Doručovacia adresa</h2>
                        <GridContainer>
                            <Container>
                                <p>Ulica</p>
                                <GroupTitle>{data.order.orderData.deliveryStreet}</GroupTitle>
                            </Container>
                            <Container>
                                <p>Mesto.</p>
                                <GroupTitle>{data.order.orderData.deliveryCity}</GroupTitle>
                            </Container>
                            <Container>
                                <p>PSČ</p>
                                <GroupTitle>{data.order.orderData.deliveryPsc}</GroupTitle>
                            </Container>
                            <Container>
                                <p>Štát</p>
                                <GroupTitle>{data.order.orderData.deliveryCountry}</GroupTitle>
                            </Container>
                        </GridContainer>
                </BusinessInfoContainer>
            )}


            {data && data.order.orderData.isBusiness && (
                <BusinessInfoContainer>
                        <h2>Informácie o spoločnosti</h2>
                        <GridContainer>
                            <Container>
                                <p>Názov spoločnosti</p>
                                <GroupTitle>{data.order.orderData.business.name || "-"}</GroupTitle>
                            </Container>
                            <Container>
                                <p>Adresa spoločnosti</p>
                                <GroupTitle>{data.order.orderData.business.residence || "-"}</GroupTitle>
                            </Container>
                            <Container>
                                <p>IČO</p>
                                <GroupTitle>{data.order.orderData.business.ico || "-"}</GroupTitle>
                            </Container>
                            <Container>
                                <p>DIČ</p>
                                <GroupTitle>{data.order.orderData.business.dic || "-"}</GroupTitle>
                            </Container>
                            <Container>
                                <p>IČDPH</p>
                                <GroupTitle>{data.order.orderData.business.icdph || "-"}</GroupTitle>
                            </Container>
                        </GridContainer>
                </BusinessInfoContainer>
            )}


            {data && (
                <ProductInfoContainer>
                    <h2>Informacie o objednávke</h2>
                    <GridContainer>
                        {Object.keys(data.order.orderData.product).map((val, idx) => {
                            if(val === "__typename") return
                            return (
                                <Container key={idx}>
                                    <p>{getConfiguratorDataTranslate(val)}</p>
                                    {
                                        Object.keys(data.order.orderData.product[val]).map((v, index) => {
                                            if(v === "__typename") return
                                            const value = data.order.orderData.product[val][v].value 
                                            // getConfiguratorDataTranslate
                                            return (
                                                <ValueContainer key={index}>
                                                    <p>{value}</p>
                                                    {data.order.orderData.product[val][v].value && <p>{(data.order.orderData.product[val][v].price / 100).toFixed(2)}€</p>}
                                                </ValueContainer>
                                            )
                                        })
                                    }
                                </Container>
                            )
                        })}
                    </GridContainer>
                </ProductInfoContainer>
            )}
        </ProductOrdersContainer>
    )
}

export default ProductSingleOrderPage
