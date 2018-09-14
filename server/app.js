require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');
const session      = require('express-session');
const passport     = require('passport');
const MongoStore   = require('connect-mongo')(session);




mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/Frank', {useMongoClient: true})
  .then(() => {
    console.log( 'Connected to Mongo!' );
  }).catch(err => {
    console.error( 'Error connecting to mongo', err );
  });

const app_name = require('./package.json').name;
const debug = require( 'debug' )( `${app_name}:${path.basename( __filename ).split( '.' )[ 0 ]}` );
const passportSetup = require('./configs/passport');
passportSetup(passport);

const app = express();

// Middleware Setup
app.use(session({
  secret: 'angular auth passport',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection }),
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(cors());
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
 }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(
  (req, res, next) => {
    res.header('Access-Control-Allow-Credential', true);
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
      res.send(200);
    } else {
      next();
    }
  }
 );

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



//ROUTES
const functions = require('./routes/friki-functions');
const auth = require( './routes/auth-routes' );
const userCrud = require( './routes/user' );


app.use('/functions', functions);
app.use( '/auth', auth );
app.use( '/user', userCrud );


// This will be the default route is nothing else is caught
app.use(function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


module.exports = app;
