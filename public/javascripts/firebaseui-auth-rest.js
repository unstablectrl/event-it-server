initApp = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var providerData = user.providerData;
      user.getToken()
        .then(accessToken => {
          let userData = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }, null, '  ')
          console.log(userData)
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      // User is signed out.
      window.location = '/'
    }
  }, error => console.log(error))
}

window.addEventListener('load', () => initApp())