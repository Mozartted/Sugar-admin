// Setting up bootstrap's Jquery
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Setting up react
import React from 'react';
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';
// import './assets/styles/phone-input.css'
import 'react-phone-input-2/lib/bootstrap.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./assets/styles/animate.css"

import { ToastProvider, useToasts } from 'react-toast-notifications'

const Index = () => (<ToastProvider><App/></ToastProvider>)

// setting up the window $ object,
window.$ = $;

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
