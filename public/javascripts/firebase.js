// Initialize Firebase
const config = {
  apiKey: "AIzaSyD3TkfPWBYrvjuul0hSxT5zKaKkp6JN31o",
  authDomain: "event-it-45529.firebaseapp.com",
  databaseURL: "https://event-it-45529.firebaseio.com",
  projectId: "event-it-45529",
  storageBucket: "event-it-45529.appspot.com",
  messagingSenderId: "742037213244"
};
firebase.initializeApp(config);

// ".read": "auth != null",
//     ".write": "auth != null"

// var t = document.getElementById('fire')
// var re = firebase.database().ref().child('text')
// re.on('value', snap => t.innerText = snap.val())

// $(() => {
//   firebase.database().ref().child('text').on('value', snap => $('#fire').text(snap.val()))
// })