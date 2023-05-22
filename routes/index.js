const express = require('express');
const router = express.Router();

const Calculate = require('../calculate');
const calculate = new Calculate();

router.get('/', async (req, res) => {
  res.send('hello');
});

router.get('/bye', async (req, res) => {
  res.send('bye');
});


module.exports = router;