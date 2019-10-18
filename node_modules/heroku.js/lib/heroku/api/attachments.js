/**
 * # Attachments
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Get Attachments
 * Get a list of app attachments
 *
 * > GET /apps/:app/attachments
 *
 *
 * ### Functions
 *   * getAttachments
 *   * listAttachments
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getAttachments('appName', function(err, res) {});
 * api.listAttachments('appName', function(err, res) {});
 * ```
 */
function getAttachments(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/attachments')
    .end(next);
}
module.exports.getAttachments = getAttachments;
module.exports.listAttachments = getAttachments;
