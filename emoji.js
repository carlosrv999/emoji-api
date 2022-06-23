var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  port            : 3306,
  user            : 'emojiuser',
  password        : 'DcS5Gb7Gs2W#',
  database        : 'emoji',
  charset         : 'utf8mb4'
});

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/emoji', function(req, res) {
  pool.query('SELECT * from emojis', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

module.exports = router;