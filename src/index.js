import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/main.css";
import "./styles/screen.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './utils/store';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';
// import ApolloProvider from "./utils/ApolloProvider"
// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:5100/',
//   cache: new InMemoryCache()
// })


// ReactDOM.render(ApolloProvider, document.getElementById('root'));


ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale} >
        <App />
        </MuiPickersUtilsProvider>
      </React.StrictMode>
  </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
