var express = require('express');
var router = express.Router();
var DBFunctions = require("../controllers/posts.controller")


router.post('/create', async function (req, res) {
  let stat = await DBFunctions.createPost(req.body.title, req.body.desc, req.body.body, req.body.img, req.body.author);
  res.send(stat);
});

router.get("/findAll", async function (req, res) {
  let stat = await DBFunctions.getPosts();
  res.send(stat);
});

router.get("/:email", async function (req, res) {
  let stat = await DBFunctions.getUserPosts(req.params["email"]);
  console.log(stat);
  res.send(stat);
});


module.exports = router;
