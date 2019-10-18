/**
 * # Releases
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## List Releases
 * Get a list of all releases
 *
 * > GET /apps/:app/releases
 *
 * ### Functions
 *   * getReleases
 *   * listReleases
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Gets the full list of app releases
 * api.getReleases('appName', function(err, res) {});
 * api.listReleases('appName', function(err, res) {});
 * ```
 */
function getReleases(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/releases')
    .end(next);
}
module.exports.getReleases = getReleases;
module.exports.listReleases = getReleases;

/**
 * ## Get Release
 * Get the information of a specific release
 *
 * > GET /apps/:app/release
 *
 * ### Functions
 *   * getRelease
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * release {string} : The release id or version
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Get information for release id 01234567-89ab-cdef-0123-456789abcdef
 * api.getRelease('appName', '01234567-89ab-cdef-0123-456789abcdef', function(err, res) {});
 * // Get information for release version 456
 * api.getRelease('appName', '456', function(err, res) {});
 * ```
 */
function getRelease(appName, release, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/releases/' + release)
    .end(next);
}
module.exports.getRelease = getRelease;

/**
 * Rollback to Release
 * Post a release. This is how you perform a rollback.
 *
 * > POST /apps/:app/release
 *
 * ### Functions
 *   * postRelease
 *   * setRelease
 *   * rollback
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * release {string} : The release id or version
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Roll back to id 01234567-89ab-cdef-0123-456789abcdef
 * api.postRelease('appName', '01234567-89ab-cdef-0123-456789abcdef', function(err, res) {});
 * api.setRelease('appName', '01234567-89ab-cdef-0123-456789abcdef', function(err, res) {});
 * api.rollback('appName', '01234567-89ab-cdef-0123-456789abcdef', function(err, res) {});
 * // Roll back to version 456
 * api.postRelease('appName', '456', function(err, res) {});
 * api.setRelease('appName', '456', function(err, res) {});
 * api.rollback('appName', '456', function(err, res) {});
 * ```
 */
function postRelease(appName, release, next) {
  if (! release) next(new Error('No release given'));

  return request
    .post(baseEndpoint + '/apps/' + appName + '/releases')
    .query({ 'rollback' : release })
    .end(next);
}
module.exports.postRelease = postRelease;
module.exports.setRelease = postRelease;
module.exports.rollback = postRelease;
