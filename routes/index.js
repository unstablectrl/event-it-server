var express = require('express');
var router = express.Router();
const pool = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {

  pool.query('SELECT $1::int AS number', ['3'])
  .then((res) => {
    console.log('number:', res.rows[0].number);
  })
  .catch((err) => {
    console.error('error running query', err);
  });
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
