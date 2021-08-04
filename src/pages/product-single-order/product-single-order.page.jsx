import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { PDFDownloadLink } from "@react-pdf/renderer"

import { useQuery } from "@apollo/client"
import { GET_ORDER } from "../../graphql/queries/order.queries"

import {
	formatPrice,
	getStatusColor,
	getStatusTranslate,
	getConfiguratorDataTranslate,
} from "../../utils/orders.utils"

import Spinner from "../../components/spinner/spinner.component"
import InvoicePDF from "../../components/pdf-document/pdf-document.component"

import {
	ProductOrdersContainer,
	HeaderContainer,
	UserInfoContainer,
	Container,
	ValueContainer,
	ProductInfoContainer,
	GridContainer,
	GroupTitle,
	BusinessInfoContainer,
} from "./product-single-order.styles"

const ProductSingleOrderPage = () => {
	const { id } = useParams()
	const [totalPrice, setTotalPrice] = useState(0)
	const [productParameters, setProductParameters] = useState(null)
	const [buyOption, setBuyOption] = useState(null)

	const { data, loading } = useQuery(GET_ORDER, {
		variables: {
			id,
		},
	})

	useEffect(() => {
		if (loading) return
		if (!data) return

		const productParametersArr = Object.keys(data.order.orderData.product)
		const productData = Object.keys(data.order.orderData.product).map(
			(val) => data.order.orderData.product[val]
		)

		let total = 0

		productData.forEach((val, i) => {
			const productNestedData = Object.keys(val).map((v) => val[v])

			productNestedData.forEach((item) => {
				if (item.value === null) return null
				total = total + (item.price === 1001 ? 0 : item.price)
			})
		})

		setTotalPrice(total)

		const newArr = productData
			.map((val, i) => {
				const productNestedData = Object.keys(val).map((v) => val[v])

				const arr = productNestedData
					.map((item, idx) => {
						if (item.value === null) return null
						if (item.value === "Nákup") {
							setBuyOption({
								...item,
								name: getConfiguratorDataTranslate("buyOptions"),
							})
						}
						return {
							...item,
							name: getConfiguratorDataTranslate(productParametersArr[i]),
						}
					})
					.filter((i) => i !== null && i.value !== "Nákup")

				return arr
			})
			.filter((i) => i.length > 0)
		setProductParameters(newArr)
	}, [loading, data])

	return (
		<ProductOrdersContainer>
			{loading && <Spinner />}

			{data && (
				<HeaderContainer statusColor={getStatusColor(data.order.status)}>
					<h1>{data.order.productID}</h1>
					<h2>{(totalPrice / 100).toFixed(2)}€</h2>
					{buyOption && productParameters && (
						<PDFDownloadLink
							document={
								<InvoicePDF
									orderID={data.order.paymentData.id}
									orderNumber={data.order.paymentData.order_number}
									totalPrice={totalPrice}
									receiver={{
										firstName: data.order.orderData.first_name,
										lastName: data.order.orderData.last_name,
										address: {
											street: data.order.orderData.street,
											city: data.order.orderData.city,
											psc: data.order.orderData.psc,
											country: data.order.orderData.country,
										},
										...(data.order.orderData.isDeliveryAddressDifferent && {
											deliveryAddress: {
												street: data.order.orderData.deliveryStreet,
												city: data.order.orderData.deliveryCity,
												psc: data.order.orderData.deliveryPsc,
												country: data.order.orderData.deliveryCountry,
											},
										}),
										...(data.order.orderData.isBusiness && {
											business: {
												name: data.order.orderData.name,
												residence: data.order.orderData.residence,
												ico: data.order.orderData.ico,
												dic: data.order.orderData.dic,
												icdph: data.order.orderData.icdph,
											},
										}),
									}}
									items={[
										[
											{
												name: data.order.productID,
												value: data.order.productID,
												price: buyOption.price,
											},
										],
										...productParameters,
									]}
								/>
							}
							fileName={`${data.order.paymentData.order_number}.pdf`}
						>
							{({ blob, url, loading, error }) =>
								loading ? "Načítavam" : "Faktúra"
							}
						</PDFDownloadLink>
					)}
					<h2>{getStatusTranslate(data.order)}</h2>
				</HeaderContainer>
			)}

			{data && (
				<UserInfoContainer>
					<h2>Informácie o platbe</h2>

					<GridContainer>
						<Container>
							<p>ID objednávky</p>
							<GroupTitle>{data.order.paymentData.id}</GroupTitle>
						</Container>
						<Container>
							<p>Číslo objednávky</p>
							<GroupTitle>{data.order.paymentData.order_number}</GroupTitle>
						</Container>
						<Container>
							<p>Status</p>
							<GroupTitle>{data.order.paymentData.state}</GroupTitle>
						</Container>
						<Container>
							<p>Odkaz na platobnú bránu</p>
							<GroupTitle
								style={{
									overflow: "hidden",
								}}
							>
								<a
									href={data.order.paymentData.gw_url}
									target="_blank"
									rel="noreferrer noopener"
									style={{
										color: "#000",
									}}
								>
									{data.order.paymentData.gw_url}
								</a>
							</GroupTitle>
						</Container>
					</GridContainer>
				</UserInfoContainer>
			)}

			{data && (
				<UserInfoContainer>
					<h2>Informácie o zákazníkovi</h2>
					<GridContainer>
						<Container>
							<p>Meno a Priezvisko</p>
							<GroupTitle>
								{data.order.orderData.first_name}{" "}
								{data.order.orderData.last_name}
							</GroupTitle>
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
							<GroupTitle>
								{data.order.orderData.business.name || "-"}
							</GroupTitle>
						</Container>
						<Container>
							<p>Adresa spoločnosti</p>
							<GroupTitle>
								{data.order.orderData.business.residence || "-"}
							</GroupTitle>
						</Container>
						<Container>
							<p>IČO</p>
							<GroupTitle>
								{data.order.orderData.business.ico || "-"}
							</GroupTitle>
						</Container>
						<Container>
							<p>DIČ</p>
							<GroupTitle>
								{data.order.orderData.business.dic || "-"}
							</GroupTitle>
						</Container>
						<Container>
							<p>IČDPH</p>
							<GroupTitle>
								{data.order.orderData.business.icdph || "-"}
							</GroupTitle>
						</Container>
					</GridContainer>
				</BusinessInfoContainer>
			)}

			{productParameters && (
				<ProductInfoContainer>
					<h2>Informacie o objednávke</h2>
					<GridContainer>
						{productParameters.map((val, idx) => {
							return val.map((v, i) => {
								return (
									<Container key={i}>
										<p>{v.name}</p>
										<ValueContainer>
											<p>
												{v.value}
												{v?.type && v.type}
											</p>
											{v.value && <p>{formatPrice(v.price)}</p>}
										</ValueContainer>
									</Container>
								)
							})
						})}
						{buyOption && (
							<Container>
								<p>{buyOption.name}</p>
								<ValueContainer>
									<p>
										{buyOption.value}
										{buyOption?.type && buyOption.type}
									</p>
									{buyOption.value && <p>{formatPrice(buyOption.price)}</p>}
								</ValueContainer>
							</Container>
						)}
					</GridContainer>
				</ProductInfoContainer>
			)}
		</ProductOrdersContainer>
	)
}

export default ProductSingleOrderPage
