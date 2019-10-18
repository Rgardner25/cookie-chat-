/**
 * # Login
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Login
 * Performs an `login` action to obtain the API key
 *
 * > POST /login
 *
 * ### Functions
 *   * postLogin
 *   * doLogin
 *   * login
 *
 *
 * ### Params
 *   * username {string} : User username
 *   * password {string} : User password
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.postLogin('username', 'password', function(err, res) {});
 * api.doLogin('username', 'password', function(err, res) {});
 * api.login('username', 'password', function(err, res) {});
 * ```
 */
function postLogin(username, password, next) {
  return request
    .post(baseEndpoint + '/login')
    .query({
      "username" : username,
      "password" : password
    })
    .end(next);
}
module.exports.postLogin = postLogin;
module.exports.doLogin = postLogin;
module.exports.login = postLogin;
