const router= require('express').Router();
let Yoga = require('../models/yogasanas.model');


//diasplay all yogas 
router.route('/yogas').get((req, res) => {
    Yoga.find()
      .then(yogas => res.json(yogas))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  


module.exports = router;
