var express = require('express');
var router = express.Router();
const pool = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {

  pool.query('SELECT * FROM "BRAND"', [])
    .then((dbres) => {
      res.render('index', { title: 'Brands', brands: dbres.rows });
    })
    .catch((err) => {
      console.error('error running query', err);
    });
});

router.post('/add', function(req, res, next) {
  console.log('form query parameters: ', req.body);
  pool.query('INSERT INTO "BRAND"(brand) VALUES($1)', [req.body.brand])
    .then((dbres) => {
      console.log('query response: ', dbres);
      res.redirect('/');
    })
    .catch((err) => {
      console.error('error running query', err);
    });
});

module.exports = router;
