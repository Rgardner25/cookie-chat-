'use strict';

var crypto = require('crypto')
  , Heroku = require('../lib/heroku/api');

var MOCK = process.env.MOCK !== 'false';

// process.env['HEROKU_API_KEY'] used for api_key
this.api = new Heroku({
  "mock" : true
});

var self = this;

crypto.randomBytes(5, function(ex, buf) {
  var random_name = buf.toString('hex');

  self.random_name = random_name;
  self.random_domain = '' + random_name + '.com';
  self.random_email_address = 'email@' + random_name + '.com';
});

// this.with_app = function(config, cb) {
//   api.post_app(config, function(err, res) {
//     var data
//   });
// }
