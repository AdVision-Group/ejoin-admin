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
import DeligateOrderModal from '../../components/modals/deligate-order-modal/deligate-order-modal.component'

import {
    ProductOrdersContainer,
    ProductsContainer,
    CenterSpinner,
    TabsUl,
    Header,
    TabButton,
    StatusTd,
    TableRow,
    OptionsContainer
} from './product-orders.styles'

const ProductOrderPage = () => {
    const history = useHistory()
    const [showDeligateModal, setShowDeligateModal] = useState(false)
    const [selectedOrder, setselectedOrder] = useState(null)

    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [activeStatus, setActiveStatus] = useState(tabsArr[activeTabIndex].status)
    const [tabs] = useState(tabsArr)

    const {loading, data, refetch} = useQuery(GET_ORDERS, {
        variables: {
            status: activeStatus
        }
    })
    const [deligateOrder] = useMutation(DELIGATE_ORDER)

    const handleTabChange = (idx) => {
        setActiveTabIndex(idx)
        deselectOrder()
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
        handleToggleDeligateModal(false)
        deselectOrder()
    }

    const selectOrder = (obj) => {
        setselectedOrder(obj)
    }

    const deselectOrder = () => {
        setselectedOrder(null)
    }

    const handleToggleDeligateModal = (boolean) => {
        setShowDeligateModal(boolean)
    }

    let timer = 0;
    let delay = 200;
    let prevent = false;
  
    const doClickAction = (obj) => {
      console.log(' click');
      selectOrder(obj)
    }
    const doDoubleClickAction = (obj) => {
      console.log('Double Click')
      history.push(`/dashboard/product/orders/${obj.id}`)
    }
    const handleClick = (obj) => {
      timer = setTimeout(function() {
        if (!prevent) {
          doClickAction(obj);
        }
        prevent = false;
      }, delay);
    }
    const handleDoubleClick = (obj) => {
      clearTimeout(timer);
      prevent = true;
      doDoubleClickAction(obj);
    }

    return (
        <ProductOrdersContainer>
            {showDeligateModal && (
                <DeligateOrderModal
                    close={() => handleToggleDeligateModal(false)}
                    update={handleSubmitDeligateModal}
                    id={selectedOrder?.id}
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

            {selectedOrder && (
                <OptionsContainer>
                    <button onClick={() => history.push(`/dashboard/product/orders/${selectedOrder.id}`)}>Zobraziť</button>
                    <button onClick={() => handleToggleDeligateModal(true)}>Spracovať</button>
                    <button onClick={deselectOrder}>X</button>
                </OptionsContainer>
            )}

            {!loading && <ProductsContainer>
                {/* <EmptyContainer>
                    {"+"}
                </EmptyContainer> */}

                <table>
                    <thead>
                        <tr>
                            <th>Produkt</th>
                            <th>Meno a priezvisko</th>
                            <th>Status</th>
                            {/* <th>Možnosti</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.orders.map(order => {
                            console.log(order.id === selectedOrder?.id)

                            return (
                                <TableRow 
                                    key={order.id} 
                                    onClick={() => handleClick(order)}
                                    onDoubleClick={() => handleDoubleClick(order)}
                                    isSelected={order.id === selectedOrder?.id}
                                >
                                    <td>{order.productID}</td>
                                    <td>{order.orderData.name}</td>
                                    <StatusTd statusColor={getStatusColor(order.status)}>{order.status}</StatusTd>
                                </TableRow>
                            )
                        })}
                    </tbody>
                </table>


                
            
            </ProductsContainer>}
        </ProductOrdersContainer>
    )
}

export default ProductOrderPage

// {data && data.orders.map(order => {
//     // console.log(order.orderData.product)
//     const productObj = order.orderData.product
//     // delete productObj["__typename"]

//     const items = Object.keys(productObj).map(val => {
//         return Object.keys(productObj[val]).map(v => {
//             // console.log(productObj[val][v])
//             return productObj[val][v].value
//         }) 
//     })
//     // console.log(items)

//     const filteredAllItems = items.map(val => val.filter(v => typeof v === "string"))
//     const filteredItems = filteredAllItems.filter(val => val.length > 0)
//     // console.log(filteredItems)

//     return (
//         <ProductOverviewContainer key={order.id}>
//             {/* <ImageContainer>
//                 IMG
//             </ImageContainer> */}
//             <ContentContainer statusColor={getStatusColor(order.status)}>
//                 <h2>{order.productID}</h2>
//                 <h3>{order.status}</h3>
//                 <ul>
//                     {
//                         filteredItems.map((item, idx) => (
//                             <li key={idx}>{item[0]}</li>
//                         ))
//                     }
//                 </ul>
//             </ContentContainer>
//             <ButtonOptions
//                 left={2}
//                 right={2}
//                 bottom={2}
//                 leftLabel="Zobrazit"
//                 rightLabel="Spracovat"
//                 handleLeftClick={() => history.push(`/dashboard/product/orders/${order.id}`)}
//                 handleRightClick={() => handleToggleDeligateModal(true, order.id)}
//             />
//         </ProductOverviewContainer>
//     )
// })}
