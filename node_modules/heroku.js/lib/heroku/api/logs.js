/**
 * # Logs
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Get Logs
 * Get the logs from the app
 *
 * > GET /apps/:app/logs
 *
 * ### Functions
 *   * getLogs
 *   * listLogs
 *   * fetchLogs
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * *options {object} : Key : value of the log options*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // Without config
 * api.getLogs('appName', function(err, res) {});
 * api.listLogs('appName', function(err, res) {});
 * api.fetchLogs('appName', function(err, res) {});
 * // With config
 * api.getLogs('appName', { 'logplex' : 'true' }, function(err, res) {});
 * api.listLogs('appName', { 'logplex' : 'true' }, function(err, res) {});
 * api.fetchLogs('appName', { 'logplex' : 'true' }, function(err, res) {});
 * ```
 */
function getLogs(appName, options, next) {
  if ((typeof options === 'function') && (! next)) {
    next = options;
    options = {};
  }
  if (typeof options !== 'object') options = {};
  options.logplex = typeof options.logplex !== 'undefined' ? options.logplex : true;

  return request
    .get(baseEndpoint + '/apps/' + appName + 'logs')
    .query(options)
    .end(next);
}
module.exports.getLogs = getLogs;
module.exports.listLogs = getLogs;
module.exports.fetchLogs = getLogs;
