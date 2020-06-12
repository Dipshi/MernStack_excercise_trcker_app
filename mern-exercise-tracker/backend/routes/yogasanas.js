const router= require('express').Router();
let Yoga = require('../models/yogasanas.model');
// const File = mongoose.model("image");

// import multer from 'multer'; 
var multer  = require('multer')
var uuidv4 = require('uuidv4')


var Storage=multer.diskStorage({
    // dest:"../uploads",
    // filename:(req,file,cb)=>{
    //     cb(null,file,filename+"_"+Date.now().path.extname(file.originalname));
    // }
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg') //Appending .jpg
    }
  
})
var upload=multer({
    storage:Storage
    // destination:"../uploads",

    // storage:multer.memoryStorage()


});

// const upload = multer({
//   limits: {
//     fileSize: 1000000 // max file size 1MB = 1000000 bytes
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(jpeg|jpg)$/)) {
//       cb(new Error('only upload files with jpg or jpeg format.'));
//     }
//     cb(undefined, true); // continue with upload
//   }
// });


// const DIR = './uploads';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });
console.log(Storage);

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });
console.log(upload);
//diasplay all yogas 
router.route('/yogas').get((req, res) => {
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
