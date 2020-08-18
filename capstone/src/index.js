import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore'



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDZIxRl36Iynr_7TJhsWVt1l0Pn_RRDZVY",
    authDomain: "capstone-cffd9.firebaseapp.com",
    databaseURL: "https://capstone-cffd9.firebaseio.com",
    projectId: "capstone-cffd9",
    storageBucket: "capstone-cffd9.appspot.com",
    messagingSenderId: "306627106594",
    appId: "1:306627106594:web:788431ca81925b4a7db77b",
    measurementId: "G-TX38D5CR82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
