// Initialize Firebase
let firebase = require('firebase');

const config = {
  apiKey: "AIzaSyD3TkfPWBYrvjuul0hSxT5zKaKkp6JN31o",
  authDomain: "event-it-45529.firebaseapp.com",
  databaseURL: "https://event-it-45529.firebaseio.com",
  projectId: "event-it-45529",
  storageBucket: "event-it-45529.appspot.com",
  messagingSenderId: "742037213244"
};
firebase.initializeApp(config);

module.exports = firebase
