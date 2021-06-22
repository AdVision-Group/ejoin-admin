import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useQuery, useMutation } from "@apollo/client"

import { useLoadingModal } from "../../hooks/useLoadingModal"

import { GET_ORDERS } from "../../graphql/queries/order.queries"
import { DELIGATE_ORDER } from "../../utils/mutations"
import {
	tabsArr,
	getStatusColor,
	getStatusTranslate,
} from "../../utils/orders.utils"

import Spinner from "../../components/spinner/spinner.component"
import DeligateOrderModal from "../../components/modals/deligate-order-modal/deligate-order-modal.component"
import LoadingModal from "../../components/modals/loading-modal/loading-modal.component"

import {
	ProductOrdersContainer,
	ProductsContainer,
	CenterSpinner,
	TabsUl,
	Header,
	TabButton,
	StatusTd,
	TableRow,
	OptionsContainer,
} from "./product-orders.styles"

const ProductOrderPage = () => {
	const history = useHistory()
	const [showDeligateModal, setShowDeligateModal] = useState(false)
	const [selectedOrder, setselectedOrder] = useState(null)

	const [activeTabIndex, setActiveTabIndex] = useState(0)
	const [activeStatus, setActiveStatus] = useState(
		tabsArr[activeTabIndex].status
	)
	const [tabs] = useState(tabsArr)

	const {
		isLoading,
		status,
		message,
		toggleLoading,
		setStatus,
		setMessage,
		resetModal,
	} = useLoadingModal()

	const { loading, data, refetch } = useQuery(GET_ORDERS, {
		variables: {
			status: activeStatus,
		},
	})
	const [deligateOrder, { loading: deligateLoading }] = useMutation(
		DELIGATE_ORDER,
		{
			onCompleted: (data) => {
				console.log("Order success change")
				console.log(data)

				setStatus("SUCCESS")
				setMessage("Objednávka bola úspešne presunutá")

				setTimeout(() => {
					resetModal()
				}, 1000)
			},
			onError: () => {
				console.log(data)

				setStatus("ERROR")
				setMessage("Niečo sa pokazilo")

				setTimeout(() => {
					resetModal()
				}, 1000)
			},
		}
	)

	const handleTabChange = (idx) => {
		setActiveTabIndex(idx)
		deselectOrder()
		setActiveStatus(tabs[idx].status)
		refetch({
			status: tabs[idx].status,
		})
	}

	const handleSubmitDeligateModal = (id, status) => {
		toggleLoading(true)
		deligateOrder({
			variables: {
				id,
				status,
			},
			refetchQueries: [
				{
					query: GET_ORDERS,
					variables: {
						status: tabs[activeTabIndex].status,
					},
				},
			],
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

	let timer = 0
	let delay = 200
	let prevent = false

	const doClickAction = (obj) => {
		console.log(" click")
		selectOrder(obj)
	}
	const doDoubleClickAction = (obj) => {
		console.log("Double Click")
		history.push(`/dashboard/product/orders/${obj.id}`)
	}
	const handleClick = (obj) => {
		timer = setTimeout(function () {
			if (!prevent) {
				doClickAction(obj)
			}
			prevent = false
		}, delay)
	}
	const handleDoubleClick = (obj) => {
		clearTimeout(timer)
		prevent = true
		doDoubleClickAction(obj)
	}

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
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

			{isLoading && (
				<LoadingModal
					loading={deligateLoading}
					status={status}
					message={message}
				/>
			)}

			<Header>
				<h1>Objednávky</h1>
			</Header>

			<TabsUl>
				{tabs &&
					tabs.map((tab, idx) => (
						<li key={idx}>
							<TabButton
								isActive={activeTabIndex === idx}
								onClick={() => handleTabChange(idx)}
							>
								{tab.name}
							</TabButton>
						</li>
					))}
			</TabsUl>
			{loading && (
				<CenterSpinner>
					<Spinner />
				</CenterSpinner>
			)}

			{selectedOrder && (
				<OptionsContainer>
					<button
						onClick={() =>
							history.push(`/dashboard/product/orders/${selectedOrder.id}`)
						}
					>
						Zobraziť
					</button>
					<button onClick={() => handleToggleDeligateModal(true)}>
						Spracovať
					</button>
					<button onClick={deselectOrder}>X</button>
				</OptionsContainer>
			)}

			{!loading && (
				<ProductsContainer>
					<table>
						<thead>
							<tr>
								<th>Produkt</th>
								<th>Meno a priezvisko</th>
								<th>Status</th>
								<th>Dátum</th>
							</tr>
						</thead>
						<tbody>
							{data &&
								data.orders
									.map((order) => {
										const date = new Date(
											order.created_date * 1
										).toLocaleDateString("sk-SK", options)

										return (
											<TableRow
												key={order.id}
												onClick={() => handleClick(order)}
												onDoubleClick={() => handleDoubleClick(order)}
												isSelected={order.id === selectedOrder?.id}
											>
												<td>{order.productID}</td>
												<td>{order.orderData.name}</td>
												<StatusTd statusColor={getStatusColor(order.status)}>
													{getStatusTranslate(order.status)}
												</StatusTd>
												<td>{date}</td>
											</TableRow>
										)
									})
									.reverse()}
						</tbody>
					</table>
				</ProductsContainer>
			)}
		</ProductOrdersContainer>
	)
}

export default ProductOrderPage
