const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDesc: { type: String, required: true },
  description: { type: String, required: true },
  creationDate: { type: Date, required: true },
  editDate: { type: Date, required: true },
  creator: { type: String, required: true, ref: 'User' },
  status: { type: String, required: true, ref: 'Status' },
});

module.exports = mongoose.model('Post', postSchema);
