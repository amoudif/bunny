'use strict';
var express = require('express');
module.exports = function(app) {
  var bunnyController = require('../Controllers/bunnyController');
var apiRoutes =  express.Router();
app.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
  });

  // registerUser Route
  app.route('/')
    .post(bunnyController.processRequest);
};