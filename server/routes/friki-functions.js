const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const Messages = require('./../models/Message');
let five = require("johnny-five"), board, lcd, led;
board = new five.Board();


board.on("ready", function() {
  led = new five.Led.RGB({
    pins: {
      red: 7,
      green: 5,
      blue: 3
    }
  });


  lcd = new five.LCD({
      // LCD pin name RS EN DB4 DB5 DB6 DB7
      // Arduino pin # 7  8  9  10 11 12
      pins: [8, 9, 10, 11, 12, 13],
      backlight: 6,
      rows: 2,
      cols: 16
    });
});

// FUNCTION 01 BLINK
router.get('/1', (req,res,next) => {
  led.on();
  res.json("Funtion1 - Rave");
});

// FUNCTION 02 GREEN
router.get('/2', (req,res,next) => {
  led.color("yellow");
  led.off();
  res.json("Funtion2 - GREEN");
});

// FUNCTION 03 RED
router.get('/3', (req,res,next) => {
  // lucecita.off();
  led.color('red'); // <===== [COLOR]
  
  res.json("Funtion3 - RED");
});

// FUNCTION 04 BLUE
router.get('/4', (req,res,next) => {
  // lucecita.off();
  led.color('blue'); // <===== [COLOR]

  res.json("Funtion4 - BLUE");
    
});

router.get('/5', (req,res,next) => {
    lcd.clear();
    lcd.cursor(0, 0).print(`Hola Mundo -> `);
    lcd.cursor(1, 0).print(`Mi primer texto,`);
  
  setTimeout(function() {
    lcd.clear();
    lcd.cursor(0, 0).print(`lo escribo aqui`);
  }, 2000);
  // Message.findById(req.params.id)
    //     .then(message => {
    //         res.json(message);
    //     })
    //     .catch(error => next(error));

  res.json("Function5 - Text");
});


router.get('/6', (req,res,next) => {

  let frame = 1;
  let frames = [":runninga:", ":runningb:"];
  let row = 1;
  let col = 0;

  lcd.useChar("runninga");
  lcd.useChar("runningb");

    board.loop(300, function() 
    {
      lcd.home().print("The Running Man"); 
      lcd.clear().cursor(row, col).print(
        frames[frame ^= 1]);
        lcd.home().print("The Running Man");    
  
      if (++col === lcd.cols) {
        col = 0;
        // if (++row === lcd.rows) {
        //   row = 0;
        // }
      }
    }); 
  
  res.json("Function6 - Running_Man");
});

module.exports = router;