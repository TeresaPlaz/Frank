const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Messages = require('./../models/Message');

//el if chequea si hay un id para controlar los errores, luego se hace el query en la base de datos con el id, aunque deberiamos usar find en el usuario, no es el mensaje para ensenarlo como me dijiste y cuando terminar envia esos datos como json
router.get('/functions', (req,res,next) => {

  // Message.findById(req.params.id)
  //     .then(message => {
  //         res.json(message);
  //     })
  //     .catch(error => next(error));
});

// => donde va la otra funcion? ok. pero entonces para otra funcion? si quieres hacer una pagina por funcion?


module.exports = router;


// const Phone = require('../models/phone-model');
// //import { Phone } from '../models/phone-model'; <- esto no va

// /* GET Phones listing. */
// router.get('/phones', (req, res, next) => {
//     Phone.find()
//     .then((phonesList, err) => {
//       if (err) {
//         res.json(err);
//         return;
//       }
//       res.json(phonesList);
//     })
//     .catch(error => next(error))
//   });

// /* CREATE a new Phone. */
// router.post('/', upload.single('file'), function(req, res) {
//   console.log('req.file ', req.file);
//   const phone = new Phone({
//     name: req.body.name,
//     brand: req.body.brand,
//     image: `/uploads/${req.file.filename}`,
//     specs: JSON.parse(req.body.specs) || []
//   });

//   phone.save((err) => {
//     if (err) {
//       return res.send(err);
//     }

//     return res.json({
//       message: 'New Phone created!',
//       phone: phone
//     });
//   });
// });
  
// /* GET a single Phone. */
// router.get('/phones/:id', (req, res, next) => {
//     if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       res.status(400).json({ message: 'Specified id is not valid' });
//       return;
//     }
  
//     Phone.findById(req.params.id)
//     .then(thePhone => {
//         res.json(thePhone);
//     })
//     .catch(error => next(error))
//   });
  
//   /* EDIT a Phone. */
//   router.put('/phones/:id', (req, res, next) => {
//     if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       res.status(400).json({ message: 'Specified id is not valid' });
//       return;
//     }
  
//     const updates = {
//       brand: req.body.brand,
//       name: req.body.name,
//       specs: req.body.specs,
//       image: req.body.image
//     };
  
//     Phone.findByIdAndUpdate(req.params.id, updates)
//     .then(phone => {
//       res.json({
//         message: 'Phone updated successfully'
//       });
//     }) 
//     .catch(error => next(error))     
//   })
  
//   /* DELETE a Phone. */
//   router.delete('/phones/:id', (req, res, next) => {
//     if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       res.status(400).json({ message: 'Specified id is not valid' });
//       return;
//     }
  
//     Phone.remove({ _id: req.params.id })
//     .then(message => {
//       return res.json({
//         message: 'Phone has been removed!'
//       });
//     })
//     .catch(error => next(error))
//   });