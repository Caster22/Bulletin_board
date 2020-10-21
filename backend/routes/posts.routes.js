const express = require('express');
const router = express.Router();
const sanitize = require('mongo-sanitize');

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post.find()
      .populate('status').populate('creator')
      .select('title shortDesc creationDate editDate creator status')
      .sort({ editDate: -1 });
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id).populate('status').populate('creator');
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/posts', async (req, res) => {
  try {
    const dataSanitize = sanitize(req.body);
    const { title, shortDesc, description, status, creationDate, editDate } = dataSanitize.componentState;
    const { currentUser } = dataSanitize;
    console.log(currentUser);
    const newPost = new Post(
      {
        title: title,
        shortDesc: shortDesc,
        description: description,
        creationDate: creationDate,
        editDate: editDate,
        creator: currentUser,
        status: status,
      }
    );
    await newPost.save();
    res.json({ message: 'OK' });
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
