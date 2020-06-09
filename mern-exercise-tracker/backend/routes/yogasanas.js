const router= require('express').Router();
let Yoga = require('../models/yogasanas.model');


//diasplay all yogas 
router.route('/yogas').get((req, res) => {
    Yoga.find()
      .then(yogas => res.json(yogas))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

  router.route('/addyoga').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const mainEffectiveArea = req.body.mainEffectiveArea;
    const otherBenefits = req.body.otherBenefits;
    const image = req.body.image;
  
    const newYoga = new Yoga({
      name,
      description,
      mainEffectiveArea,
      otherBenefits,
      image,
    });
  
    newYoga.save()
    .then(() => res.json('Yoga added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;
