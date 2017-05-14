module.exports.about = (req, res) => {
  res.render('generic-text', {
    title: 'About Event It',
    content: 'Praesent erat mi, consequat sed mattis eu, ultrices quis nibh. Aliquam quis ex aliquet, efficitur nisl quis, euismod elit. Fusce.'
  })
}