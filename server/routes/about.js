const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req,res,next) => {
  
  res.json('ABOUT');
});

module.exports = router;
