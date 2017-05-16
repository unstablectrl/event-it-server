module.exports.home = (req, res) => {
  res.render('index', {
    title: 'Event It',
    description: 'Curabitur et magna diam. Etiam mauris ex, luctus eu tempus iaculis, malesuada eget libero. Integer luctus porttitor metus, sed imperdiet elit venenatis iaculis. Aenean tincidunt arcu non tellus rutrum cursus.'
  })
}
