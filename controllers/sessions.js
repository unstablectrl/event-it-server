let firebase = require('../lib/firebase')

module.exports.signin = (req, res) => {
  let email = req.body.email
  let password = req.body.password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('signed in')
      res.redirect('/dashboard')
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('signed in error')
      console.log(errorCode, errorMessage)
    })
}

module.exports.signup = (req, res) => {
  let email = req.body.email
  let name = req.body.name
  let password = req.body.password
  res.redirect('/dashboard')
}
