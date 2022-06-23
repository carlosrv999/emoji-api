var express = require('express');
var router = express.Router();
const pool = require('./index').pool;

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/emoji', function(req, res) {
  pool.query('SELECT * from emojis', function (error, results, fields) {
    if (error) {
      res.status(500).send(error);
    };
    res.send(results);
  });
});

module.exports = router;