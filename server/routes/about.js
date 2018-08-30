const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req,res,next) => {
  // res.render('about'); <- ahora se enviara json de respuesta
});

module.exports = router;
