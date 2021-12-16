var express = require('express');
var router = express.Router();
var DBFunctions = require("../controllers/users.controller")
var config = require('../db/dbconfig');
var jwt = require('jsonwebtoken');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/register', function (req, res) {
  let stat = DBFunctions.createUser(req.body.email, req.body.username, req.body.hpassword, req.body.salt);
  res.send(stat);
});

router.post('/login', async function (req, res) {
  let stat = await DBFunctions.matchUserPassword(req.body.email);

  stat.accessToken = jwt.sign(req.body.email, config.SECRET_KEY);
  res.send(stat);

});


module.exports = router;
