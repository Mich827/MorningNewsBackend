require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const cors = require('cors');
//app.use(cors());
app.use(cors({
  origin: 'https://morning-news-frontend-xi.vercel.app', // Autoriser les requêtes depuis cette origine
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Autoriser ces méthodes
  allowedHeaders: ['Content-Type', 'Authorization'], // Autoriser ces en-têtes
  preflightContinue: false, // Passer la réponse CORS préalable à l'handler suivant
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
