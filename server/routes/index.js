const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
<<<<<<< Updated upstream
  // res.render('index');
=======
  let user = req.user;
  // res.render('index', {user});
>>>>>>> Stashed changes
});

module.exports = router;
