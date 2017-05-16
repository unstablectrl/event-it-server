const firebase = require('../lib/firebase');

module.exports.listEvents = (req, res) => {
  res.render('events', {
    title: 'Events',
  })
}

module.exports.showEvent = (req, res) => {
  res.render('index', {
    title: 'Event It',
    description: 'Curabitur et magna diam. Etiam mauris ex, luctus eu tempus iaculis, malesuada eget libero. Integer luctus porttitor metus, sed imperdiet elit venenatis iaculis. Aenean tincidunt arcu non tellus rutrum cursus.'
  })
}

let createEvent = (name, st, uid) => {
  firebase.database().ref('users/'+uid+'/events').push({
    "eventname": name,
    "start": st
  }).catch(e => {
    //TODO handle error
  })
}

module.exports.addEvent = (req, res) => {
  let name = req.body.name
  let st = req.body.start
  let uid = req.body.uid
  console.log(uid)
  createEvent(name, st, uid)
  res.redirect(req.get('referer'));
}