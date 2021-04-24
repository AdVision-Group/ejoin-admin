import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components'
import AuthProvider from './context/auth/auth.context'
import {GlobalStyles,theme} from './global.styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  // uri: process.env.REACT_APP_BACKEND_ENDPOINT,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
