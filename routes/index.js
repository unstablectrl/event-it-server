var express = require('express');
var router = express.Router();
const pool = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {

  pool.query('SELECT brand FROM "BRAND"', [])
  .then((dbres) => {
    res.render('index', { title: dbres.rows[0].brand });
  })
  .catch((err) => {
    console.error('error running query', err);
  });
  
});

module.exports = router;
