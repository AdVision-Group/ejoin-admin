import React from "react"
import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	Font,
} from "@react-pdf/renderer"

import robotoFont from "./font/Roboto-Regular.ttf"

// Register font
Font.register({
	family: "Roboto",
	src: robotoFont,
})

// Create styles
const styles = StyleSheet.create({
	page: {
		// width: "100%",
		// flexDirection: "row",
		backgroundColor: "#fff",
		fontFamily: "Roboto",
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
	head: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		border: "1px solid #000",
		padding: 5,
		margin: 10,
		marginBottom: 0,
	},
	headHeading: {
		fontSize: 20,
		textTransform: "uppercase",
	},
	headContent: {
		display: "flex",
		flexDirection: "row",
		borderLeft: "1px solid #000",
		borderRight: "1px solid #000",
		margin: 10,
		marginTop: 0,
		marginBottom: 0,

		// padding: 5,
	},
	contactContainer: {
		marginLeft: 25,
		// fontWeight: 700,
		marginBottom: 10,
	},
	senderContainer: {
		width: "40%",
		borderRight: "1px solid #000",
		borderBottom: "1px solid #000",
		fontSize: 12,
		padding: 5,
	},
	senderParagraph: {
		marginBottom: 5,
	},
	infoContainer: {
		width: "60%",
		fontSize: 10,
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	infoCol: {
		width: "50%",
		padding: 5,
		borderBottom: "1px solid #000",
	},
	infoColTable: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	receiverContainer: {
		width: "100%",
		borderBottom: "1px solid #000",
		padding: 5,
	},
	receiverRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		// padding: 5,
	},
	dateContainer: {
		display: "flex",
		flexDirection: "row",
		borderLeft: "1px solid #000",
		borderRight: "1px solid #000",
		borderBottom: "1px solid #000",
		margin: 10,
		marginTop: 0,
		marginBottom: 0,
	},
	dateCol: {
		width: "33%",
		fontSize: 10,
		padding: 5,
	},
	itemsContainer: {
		borderLeft: "1px solid #000",
		borderRight: "1px solid #000",
		margin: 10,
		marginTop: 0,
		marginBottom: 0,
		padding: 5,
	},
	itemsTableHead: {
		display: "flex",
		flexDirection: "row",
		// justifyContent: "space-evenly",
		fontSize: 10,
		padding: 5,
		borderBottom: "1px solid #000",
	},
	itemsTableItem: {
		display: "flex",
		flexDirection: "row",
		// justifyContent: "space-evenly",
		fontSize: 10,
		padding: 5,
	},
	footerContainer: {
		display: "flex",
		flexDirection: "row",
		fontSize: 10,
		borderLeft: "1px solid #000",
		borderRight: "1px solid #000",
		margin: 10,
		marginTop: 0,
	},
	footerCol: {
		width: "30%",
		borderTop: "1px solid #000",
		borderRight: "1px solid #000",
		borderBottom: "1px solid #000",
		padding: 5,
	},
	footerSummaryCol: {
		width: "40%",
		borderTop: "1px solid #000",
		borderBottom: "1px solid #000",
	},
	footerSummaryRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 5,
	},
})

// Create Document Component
const PDFDocument = ({ orderID, orderNumber, receiver, items, totalPrice }) => (
	<Document language="SK">
		<Page size="A4" style={styles.page}>
			<View style={styles.head}>
				<Text style={styles.headHeading}>Faktúra</Text>
				<Text style={styles.headHeading}>{orderNumber}</Text>
			</View>
			<View style={styles.headContent}>
				<View style={styles.senderContainer}>
					<Text style={styles.senderParagraph}>ejoin, s.r.o.</Text>
					<Text style={styles.senderParagraph}>Štúrova 1529</Text>
					<Text style={styles.senderParagraph}>018 41 Dubnica nad Váhom</Text>
					<Text style={styles.senderParagraph}>Slovenská republika</Text>
				</View>
				<View style={styles.infoContainer}>
					<View style={styles.infoCol}>
						<Text>Forma úhrady:</Text>
						{/* <Text>peňažný prevod</Text> */}
					</View>
					<View style={[styles.infoCol, { borderLeft: "1px solid #000" }]}>
						<View style={styles.infoColTable}>
							<Text>Variabilný symbol</Text>
							<Text>{orderID}</Text>
						</View>
						<View style={styles.infoColTable}>
							<Text>Konštantný symbol</Text>
							<Text>9999</Text>
						</View>
					</View>
					<View style={styles.receiverContainer}>
						<View>
							<Text style={{ marginBottom: 1 }}>Odberateľ:</Text>
							<View style={styles.contactContainer}>
								<Text>
									{receiver.firstName} {receiver.lastName}
								</Text>
								<Text>{receiver.address.street}</Text>
								<Text>
									{receiver.address.psc} {receiver.address.city}
								</Text>
								<Text>{receiver.address.country}</Text>
							</View>
						</View>
						{receiver.business && (
							<View style={styles.contactContainer}>
								<Text>{receiver.business.name}</Text>
								<Text>{receiver.business.residence}</Text>
								<View style={styles.receiverRow}>
									<Text>IČO</Text>
									<Text>{receiver.business.ico}</Text>
								</View>
								<View style={styles.receiverRow}>
									<Text>DIČ</Text>
									<Text>{receiver.business.dic}</Text>
								</View>
								<View style={styles.receiverRow}>
									<Text>IČDPH</Text>
									<Text>{receiver.business.icdph}</Text>
								</View>
							</View>
						)}

						{receiver.deliveryAddress && (
							<View>
								<Text style={{ marginBottom: 1 }}>Dodacia adresa:</Text>
								<View style={styles.contactContainer}>
									<Text>
										{receiver.firstName} {receiver.lastName}
									</Text>
									<Text>{receiver.deliveryAddress.street}</Text>
									<Text>
										{receiver.deliveryAddress.psc}{" "}
										{receiver.deliveryAddress.city}
									</Text>
									<Text>{receiver.deliveryAddress.country}</Text>
								</View>
							</View>
						)}
					</View>
				</View>
			</View>

			<View style={styles.dateContainer}>
				<View style={styles.dateCol}>
					<Text>Dátum vystavenia:</Text>
					<Text>16.7.2021</Text>
				</View>
				<View
					style={[
						styles.dateCol,
						{ borderLeft: "1px solid #000", borderRight: "1px solid #000" },
					]}
				>
					<Text>Dátum dodania:</Text>
					<Text>16.7.2021</Text>
				</View>
				<View style={styles.dateCol}>
					<Text>Dátum splatnosti:</Text>
					<Text>16.7.2021</Text>
				</View>
			</View>

			<View style={styles.itemsContainer}>
				<View style={styles.itemsTableHead}>
					<Text style={{ width: "20%" }}>Popis položky</Text>
					<Text style={{ width: "10%" }}>Množstvo</Text>
					<Text style={{ width: "15%" }}>MJ</Text>
					<Text style={{ width: "15%" }}>Cena za MJ</Text>
					<Text style={{ width: "15%" }}>Celkom bez DPH</Text>
					<Text style={{ width: "10%" }}>DPH</Text>
					<Text style={{ width: "15%" }}>Celkom s DPH</Text>
				</View>

				{items.map((item, idx) => {
					return item.map((i, index) => (
						<View key={index} style={styles.itemsTableItem}>
							<Text style={{ width: "20%" }}>{i.value}</Text>
							<Text style={{ width: "10%" }}>1</Text>
							<Text style={{ width: "15%" }}>{i.price}</Text>
							<Text style={{ width: "15%" }}>{i.price}</Text>
							<Text style={{ width: "15%" }}>{i.price}</Text>
							<Text style={{ width: "10%" }}>20%</Text>
							<Text style={{ width: "15%" }}>{i.price}</Text>
						</View>
					))
				})}
			</View>

			<View style={styles.footerContainer}>
				<View style={styles.footerCol}>
					<Text>Vyhotovil:</Text>
				</View>
				<View style={styles.footerCol}>
					<Text>Prevzal:</Text>
				</View>
				<View style={styles.footerSummaryCol}>
					<View style={styles.footerSummaryRow}>
						<Text>Celkova suma bez DPH:</Text>
						<Text>{totalPrice} EUR</Text>
					</View>
					<View style={styles.footerSummaryRow}>
						<Text>DPH:</Text>
						<Text>{totalPrice} EUR</Text>
					</View>
					<View style={styles.footerSummaryRow}>
						<Text>Celkova suma s DPH:</Text>
						<Text>{totalPrice} EUR</Text>
					</View>
					<View style={styles.footerSummaryRow}>
						<Text>Uhradené zálohami:</Text>
						<Text>{totalPrice} EUR</Text>
					</View>
					<View style={styles.footerSummaryRow}>
						<Text>K úhrade:</Text>
						<Text>{totalPrice} EUR</Text>
					</View>
				</View>
			</View>
		</Page>
	</Document>
)

export default PDFDocument
