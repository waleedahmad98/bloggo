import connectDB from './db/db.js';
import express from 'express';
import cors from 'cors';
import {createUser, matchUserPassword} from './controllers/users.controller.js';
import {createPost, getPosts} from './controllers/posts.controller.js';
import {SECRET_KEY} from './db/dbconfig.js';
import jwt from 'jsonwebtoken';

connectDB();

var app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/register', function (req, res) {
  let stat = createUser(req.body.email, req.body.username, req.body.hpassword, req.body.salt);
  res.send(stat);
});

app.post('/login', async function (req, res) {
  let stat = await matchUserPassword(req.body.email);

  stat.accessToken = jwt.sign(req.body.email, SECRET_KEY);
  res.send(stat);

});

app.post('/create', async function (req, res) {
  let stat = await createPost(req.body.title, req.body.desc, req.body.body, req.body.img, req.body.author);
  res.send(stat);
});

app.get("/findAll", async function (req, res) {
  let stat = await getPosts();
  res.send(stat);
});

app.listen(8000, function () {
  console.log('Example app listening at localhost:8000')
});