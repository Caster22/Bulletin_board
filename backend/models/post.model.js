const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, minLength: 10 },
  shortDesc: { type: String, required: true, minLength: 10 },
  description: { type: String, required: true, minLength: 20 },
  creationDate: { type: Date, required: true },
  editDate: { type: Date, required: false },
  creator: { type: String, required: true, ref: 'User' },
  status: { type: String, required: true, ref: 'Status' },
});

module.exports = mongoose.model('Post', postSchema);
