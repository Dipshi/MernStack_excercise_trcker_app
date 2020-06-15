const router= require('express').Router();
let Yoga = require('../models/yogasanas.model');

// import multer from 'multer'; 
var multer  = require('multer')

var Storage=multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads/')
    },
    filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
      // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

    }
  
})
var upload=multer({
    storage:Storage

});


//diasplay all yogas 
router.route('/').get((req, res) => {
    Yoga.find()
      .then(yogas => res.json(yogas))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

  router.route('/addyoga').post(upload.single('file'),(req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const mainEffectiveArea = req.body.mainEffectiveArea;
    const otherBenefits = req.body.otherBenefits;
    const image = req.file.filename;
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
