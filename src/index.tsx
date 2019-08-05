import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './views/Dashboard/Dashboard.tsx';
import * as serviceWorker from './serviceWorker';
import {Router,Route, Redirect,hashHistory} from "react-router-dom";
// var firebase = require('firebase');
// var app = firebase.initializeApp({ ... });
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

ReactDOM.render
(
    <Dashboard/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
