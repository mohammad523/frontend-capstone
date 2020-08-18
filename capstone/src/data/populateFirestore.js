const firebase = require('firebase');
require('firebase/firestore');

const { messages } = require('./data.js')
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

  const db = firebase.firestore()

  function populateCollection(collectionName, items){
      return Promise.all(items.map(item=> {
          const {id, ...data } = item;
          return db.collection(collectionName)
          .doc(id)
          .set(data)
      }))
  }

  Promise.all([
      populateCollection('messages', messages)
  ])
  .then(()=>{
    console.log('Done!');
    process.exit(0);
  })
  .catch(err =>{
    console.log(err);
  });