import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {useQuery, useMutation} from '@apollo/client'
import {GET_ORDERS} from '../../utils/queries'
import {
    DELIGATE_ORDER
} from '../../utils/mutations'
import {
    tabsArr,
    getStatusColor
} from '../../utils/orders.utils'

import Spinner from '../../components/spinner/spinner.component'
import DeligateOrderModal from '../../components/modal-deligate-order/modal-deligate-order.component'
import ButtonOptions from '../../components/button-options/button-options.component'

import {
    ProductOrdersContainer,
    ProductsContainer,
    EmptyContainer,
    ImageContainer,
    ContentContainer,

    ProductOverviewContainer,
    CenterSpinner,
    TabsUl,
    Header,
    TabButton
    // TabLi
} from './product-orders.styles'

const ProductOrderPage = () => {
    const history = useHistory()
    const [showDeligateModal, setShowDeligateModal] = useState(false)
    const [selectedOrderID, setselectedOrderID] = useState(null)

    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [activeStatus, setActiveStatus] = useState(tabsArr[activeTabIndex].status)
    const [tabs] = useState(tabsArr)

    const {loading, error, data, refetch} = useQuery(GET_ORDERS, {
        variables: {
            status: activeStatus
        }
    })
    const [deligateOrder] = useMutation(DELIGATE_ORDER)

    const handleTabChange = (idx) => {
        setActiveTabIndex(idx)
        setActiveStatus(tabs[idx].status)
        refetch({
            status: tabs[idx].status
        })
    }

    const handleSubmitDeligateModal = (id, status) => {
        deligateOrder({
            variables: {
                id,
                status
            },
            refetchQueries: [{
                query: GET_ORDERS,
                variables: {
                    status: tabs[activeTabIndex].status
                }
            }]
        })
        handleToggleDeligateModal(false, null)
    }

    const handleToggleDeligateModal = (boolean, id) => {
        if(boolean) {
            if(!id) return
            setShowDeligateModal(boolean)
            setselectedOrderID((id))
            return
        }
        setShowDeligateModal(boolean)
        setselectedOrderID(id)
    }

    return (
        <ProductOrdersContainer>
            {showDeligateModal && (
                <DeligateOrderModal
                    close={() => handleToggleDeligateModal(false, null)}
                    update={handleSubmitDeligateModal}
                    id={selectedOrderID}
                />
            )}

            <Header>
                <h1>Objednávky</h1>

            </Header>

            <TabsUl>
                {tabs && tabs.map((tab, idx) => (
                    <li key={idx}>
                        <TabButton isActive={activeTabIndex === idx} onClick={() => handleTabChange(idx)}>{tab.name}</TabButton>
                    </li>
                ))}
            </TabsUl>
            {loading && (
                <CenterSpinner>
                    <Spinner/>
                </CenterSpinner>
            )}

            {!loading && <ProductsContainer>
                {/* <EmptyContainer>
                    {"+"}
                </EmptyContainer> */}


                {data && data.orders.map(order => {
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
                            <ContentContainer statusColor={getStatusColor(order.status)}>
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
                            <ButtonOptions
                                left={2}
                                right={2}
                                bottom={2}
                                leftLabel="Zobrazit"
                                rightLabel="Spracovat"
                                handleLeftClick={() => history.push(`/dashboard/product/orders/${order.id}`)}
                                handleRightClick={() => handleToggleDeligateModal(true, order.id)}
                            />
                        </ProductOverviewContainer>
                    )
                })}

            
            </ProductsContainer>}
        </ProductOrdersContainer>
    )
}

export default ProductOrderPage
