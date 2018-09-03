const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let five = require("johnny-five"), board, lcd;

let lucecita;

board = new five.Board();
board.on("ready", function() {
  // lucecita = new five.Led(13);
  lucecita = new five.Led.RGB({pins:{red:6,green:5,blue:3}});
});

// const Messages = require('./../models/Message');


router.get('/1', (req,res,next) => {
  // lucecita.blink(100);
  lucecita.color('red'); // <===== [COLOR - 1]
  res.json("Funtion1 - Rave");

  // Message.findById(req.params.id)
  //     .then(message => {
  //         res.json(message);
  //     })
  //     .catch(error => next(error));

});

router.get('/2', (req,res,next) => {
  // lucecita.blink(1000);
  lucecita.color('green'); // <===== [COLOR - 2]
  // lucecita.stop();
  // lucecita.off();

  res.json("Funtion2");
    // Message.findById(req.params.id)
    //     .then(message => {
    //         res.json(message);
    //     })
    //     .catch(error => next(error));

});

module.exports = router;

// ​
// board = new five.Board();
// ​
// board.on("ready", function() {
// ​
//  lcd = new five.LCD({
//   // LCD pin name RS EN DB4 DB5 DB6 DB7
//   // Arduino pin # 7  8  9  10 11 12
//   pins: [7, 8, 9, 10, 11, 12],
//   backlight: 6,
//   rows: 2,
//   cols: 20
// ​
// ​
//   // Options:
//   // bitMode: 4 or 8, defaults to 4
//   // lines: number of lines, defaults to 2
//   // dots: matrix dimensions, defaults to "5x8"
//  });
// ​
//  // Tell the LCD you will use these characters:
//  lcd.useChar("check");
//  lcd.useChar("heart");
//  lcd.useChar("duck");
// ​
//  // Line 1: Hi rmurphey & hgstrp!
//  lcd.clear().print("rmurphey, hgstrp");
//  lcd.cursor(1, 0);
// ​
//  // Line 2: I <3 johnny-five
//  // lcd.print("I").write(7).print(" johnny-five");
//  // can now be written as:
//  lcd.print("I :heart: johnny-five");
// ​
//  this.wait(3000, function() {
//   lcd.clear().cursor(0, 0).print("I :check::heart: 2 :duck: :)");
//  });
// ​
//  this.repl.inject({
//   lcd: lcd
//  });
// });