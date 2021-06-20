import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import AuthProvider from "./context/auth/auth.context"
import { GlobalStyles, theme } from "./global.styles"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
	uri:
		process.env.NODE_ENV === "production"
			? "https://ejoin-gateway-jbuievsjdq-ew.a.run.app/graphql"
			: "http://localhost:4000/graphql",
})

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("accessToken")
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : "",
		},
	}
})

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
})

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<AuthProvider>
					<App />
				</AuthProvider>
			</ThemeProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// const myWidget = window.cloudinary.createUploadWidget({
//   cloudName: 'coderkin',
//   uploadPreset: 'my_preset'}, (error, result) => {
//     if (!error && result && result.event === "success") {
//       console.log('Done! Here is the image info: ', result.info);
//     }
//   }
// )
