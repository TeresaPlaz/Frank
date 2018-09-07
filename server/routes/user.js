const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require( '../models/User' );
const bcrypt     = require('bcrypt');

// USER PROFILE 
router.get( '/profile', ( req, res, next ) =>
{
  let userID = req.user._id;

  if(!mongoose.Types.ObjectId.isValid(userID)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  User.findById(userID)
    .then( ( user, err ) =>
    {
      if ( err )
      {
        res.json( err );
        return;
      }
      res.json( user );
    } )
    .catch( error => next( error ) );
  });
  
  // EDIT USER 
router.put( '/edit', ( req, res, next ) =>
{
  let userID = req.user._id;
  if ( !mongoose.Types.ObjectId.isValid( userID ) )
  {
    res.status( 400 ).json( { message: 'Specified id is not valid' } );
    return;
  }
  
  const { username, password, password2 } = req.body;

      if (username === "" || password === "" || password2 === "") {
          res.status(400).json({message: 'Empty inputs'});
          return;
          }

      if ( password === password2 )
      {
        
        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
          
          const updates = {
            username: username,
            password: hashPass
          };
          
          User.findByIdAndUpdate( userID, updates )
            .then( user =>
            {
              res.json( {
                message: 'User updated successfully'
              } );
            } )
            .catch( error => next( error ) );
        
      }
      else if (password !== password2)
      {
        res.status(400).json({message: "Passwords don't match"});
        return;
      }
});
  
  // DELETE USER
  router.delete('/delete', (req, res, next) => {
    let userID = req.user._id;
  if ( !mongoose.Types.ObjectId.isValid( userID ) )
  {
    res.status( 400 ).json( { message: 'Specified id is not valid' } );
    return;
  }
  
    User.remove( { _id: userID } )
      .then( message =>
      {
        return res.json( {
          message: 'User has been removed!'
        } );
      } )
      .catch( error => next( error ) );
  });

module.exports = router;