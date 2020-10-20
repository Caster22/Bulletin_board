const express = require('express');
const router = express.Router();

const Status = require('../models/status.model');

router.get('/status', async (req, res) => {
  try {
    const result = await Status.find();
    if (!result) res.status(404).json({ message: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json({ message: err});
  }
});

module.exports = router;
