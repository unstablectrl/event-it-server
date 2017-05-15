const db = require('../lib/firebase').database;

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

let createEvent = (name, st) => {
  db.ref('events').push({
    eventname: name,
    start: st
  })
}

module.exports.addEvent = (req, res) => {
  let name = req.body.name
  let start = req.body.start
  createEvent(name, st)
  res.redirect(req.get('referer'));
}