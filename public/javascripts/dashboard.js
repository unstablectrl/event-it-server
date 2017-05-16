$(() => {
  $('#logout-btn').click(() => {
    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful.
        console.log('signed out')
      })
      .catch(error => {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })
  })
})

