import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import client from './lib/ApolloClient'
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider } from "./State";
import 'react-calendar/dist/Calendar.css';

import {
  ApolloProvider,
  gql

} from "@apollo/client";

client
  .query({
    query: gql`
     query {
  studentsList{
    title
    id
    checkbox
  }
}

    `
  })
  .then(result => console.log(result));

ReactDOM.render(

  <ApolloProvider client={client} >
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ApolloProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
