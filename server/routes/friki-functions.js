const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const Messages = require('./../models/Message');
let five = require("johnny-five"), board, lcd, led, servin, running;
board = new five.Board();


board.on("ready", function() {
  led = new five.Led.RGB({
    pins: {green:4,red: 5,blue: 3}  });

  lcd = new five.LCD({
      // LCD pin name RS EN DB4 DB5 DB6 DB7
      // Arduino pin # 7  8  9  10 11 12
      pins: [7, 8, 9, 10, 11, 12],
      backlight: 6,
      rows: 2,
      cols: 16
    });

  servin = new five.Servo({
    pin: 6, 
    center: true,
    range: [45, 135],
  }); 

});

// FUNCTION 01 BLINK
router.get('/1', (req,res,next) => {
  led.blink(300);
  res.json("Funtion1 - ON");
});

// FUNCTION 02 OFF
router.get('/2', (req,res,next) => {
  led.stop().off();
  res.json("Funtion2 - OFF");
});

// FUNCTION 03 RED
router.get('/3', (req,res,next) => {
  led.stop();
  led.color('red'); // <===== [COLOR]
  
  res.json("Funtion3 - RED");
});

// FUNCTION 04 BLUE
router.get('/4', (req,res,next) => {
  led.stop();
  led.color('blue'); // <===== [COLOR]

  res.json("Funtion4 - BLUE");
    
});

// FUNCTION 05 PURPLE
router.get('/5', (req,res,next) => {
  led.stop();
  led.color('purple'); // <===== [COLOR]
  res.json('Function5 -- PURPLE');
});

// FUNCTION 06 TEXT
router.get('/6', (req,res,next) => {
    lcd.clear();
    led.stop().off();
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

  res.json("Function6 - Text");
});

// FUNCTION 07 RUNNING-MAN
router.get('/7', (req,res,next) => {
  servin.stop();
  led.stop().off();
  let frame = 1;
  let frames = [":runninga:", ":runningb:"];
  let row = 1;
  let col = 0;
  lcd.useChar("runninga");
  lcd.useChar("runningb");

 running =  setInterval(function() 
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
    }, 300); 
  
  res.json("Function7 - Running_Man");
});

// FUNCTION 08 SERVO ON
router.get('/8', (req,res,next) => {
  clearInterval(running);
  lcd.clear();
  servin.sweep();
  led.stop().off();
  res.json("Funtion8 - SERVO ON");
});

// FUNCTION 09 SERVO OFF
router.get('/9', (req,res,next) => {
  servin.stop();
  led.stop().off();
  res.json("Funtion9 - SERVO OFF");
});

module.exports = router;