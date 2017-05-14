$(() => {
  firebase.database().ref().child('text').on('value', snap => $('#fire').text(snap.val()))
  $('#signup-btn').click(() => {
    // TODO: verify email syntax and password length
    const email = $('#email').val()
    const password = $('#password').val()

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ...
      });
  })

  $('#login-btn').click(() => {
    // TODO: verify email syntax and password length
    const email = $('#email').val()
    const password = $('#password').val()

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location = 'about'
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ...
      });
  })

  $('#logout-btn').click(() => {

    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful.
        console.log('signed out')
      })
      .catch((error) => {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  })

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser)
      $('#logout-btn').removeClass('hide')
    } else {
      console.log('not logged in')
      $('#logout-btn').addClass('hide')
      // window.location = '/'
      if (window.location.pathname != '/') window.location = '/'
    }
  })
  
})