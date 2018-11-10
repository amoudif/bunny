'use strict';
var mongoose = require('mongoose');
var special = mongoose.model('special');

exports.processRequest = function(req, res) {
    if (req.body.result.action == "schedule") {
        getTeamSchedule(req,res)
      }
    else if (req.body.result.action == "tell.about")
      {
          getSpecial(req,res)
      } 
};

function getSpecial(req,res)
    {
    let specialToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.Special ? req.body.result.parameters.Special : 'Unknown';
    special.findOne({name:specialToSearch},function(err,specialExists)
          {
            if (err)
            {
              return res.json({
                  speech: 'Something went wrong!',
                  displayText: 'Something went wrong!',
                  source: 'special info'
              });
            }
    if (specialExists)
            {
              return res.json({
                    speech: specialExists.description,
                    displayText: specialExists.description,
                    source: 'special info'
                });
            }
            else {
              return res.json({
                    speech: 'Currently I am not having information about this special',
                    displayText: 'Currently I am not having information about this special',
                    source: 'special info'
                });
            }
          });
    }