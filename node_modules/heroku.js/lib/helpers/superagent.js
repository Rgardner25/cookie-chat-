'use strict';

var defaults = require('superagent-defaults')
  , httpErrors = require('./httpErrors')
  , herokuVersion = require('../heroku/api/version');

var authHeader;


var superagent = module.exports = defaults()
  .on('request', function(req) {
    var apiKey = getAPIKey();
    req
      // .set('Accept', "application/vnd.heroku+json; version=3")
      .set('Accept', "application/json")
      // .set('Accept-Encoding', 'gzip')
      .set('User-Agent', 'heroku-js' + herokuVersion)
      .timeout(5000)
      .on('response', httpErrors)
      .on('error', function errorHandler(err) {
        console.log("HANDLING ERROR:");
        console.log(err);
      });


    if (apiKey) {
      req.set('Authorization', 'Basic ' + apiKey);
    }

  });

function getAPIKey() {
  return authHeader;
}

superagent.setAPIKey = function setAPIKey(key) {
  authHeader = key;
};
