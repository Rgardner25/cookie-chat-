/**
 * # Users
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Get User
 * Get the info on the 'current' Heroku user
 *
 * > GET /user
 *
 * ### Functions
 *   * getUser
 *
 *
 * ### Params
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getUser(function(err, res) {});
 * ```
 */
function getUser(next) {
  return request
    .get(baseEndpoint + '/user')
    .end(next);
}
module.exports.getUser = getUser;
