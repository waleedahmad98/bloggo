var express = require('express');
var router = express.Router();
var DBFunctions = require("../controllers/posts.controller")
var multer = require('multer');
const path = require('path');
var fs = require('fs');

var upload  = multer({ dest: 'uploads/' });

router.post('/create', upload.single('image'), async (req, res) => {
  let stat = await DBFunctions.createPost(req.body.title, req.body.summary, req.body.text, req.file.filename, req.body.author);
  res.send(stat);
});

router.get("/findAll", async function (req, res) {
  let stat = await DBFunctions.getPosts();
  res.send(stat);
});

router.get("/:email", async function (req, res) {
  let stat = await DBFunctions.getUserPosts(req.params["email"]);
  res.send(stat);
});

router.delete("/delete/:id", async function(req, res){
  let imageLink = await DBFunctions.getPostById(req.params["id"]);
  console.log(imageLink);
  const filePath = path.join(__dirname, "../uploads", imageLink.image)
  fs.unlinkSync(filePath);
  let stat = await DBFunctions.deletePost(req.params["id"]);
  res.send(stat);
});

router.get("/edit/:id", async function(req, res){
  let stat = await DBFunctions.getPostEdit(req.params["id"]);
  res.send(stat);
});

router.put("/edit/:id", upload.single('image'), async function(req, res){
  let stat = await DBFunctions.updatePost(req.params["id"], req.body.title, req.body.desc, req.body.body, req.file.img, req.body.author)
  res.send(stat);
})

router.get("/uploads/:filename", (req, res)=>{
  
  const filePath = path.join(__dirname, "../uploads", req.params["filename"])
  res.sendFile(filePath);
})

module.exports = router;
