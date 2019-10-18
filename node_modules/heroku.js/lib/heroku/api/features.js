/**
 * # Features
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Delete Feature
 * Remove a Heroku feature from the account or app
 *
 * > DELETE /features/:feature
 *
 * ### Functions
 *   * deleteFeature
 *   * removeFeature
 *   * rmFeature
 *
 *
 * ### Params
 *   * feature {string} : The name of the Heroku feature
 *   * *appName {string} : The name of the Heroku app*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // Remove `sumo-rankings` from the account
 * api.deleteFeature('sumo-rankings', function(err, res) {});
 * api.removeFeature('sumo-rankings', function(err, res) {});
 * api.rmFeature('sumo-rankings', function(err, res) {});
 * // Remove 'user_env_compile' from an app
 * api.deleteFeature('user_env_compile', 'appName', function(err, res) {})
 * api.removeFeature('user_env_compile', 'appName', function(err, res) {})
 * api.rmFeature('user_env_compile', 'appName', function(err, res) {})
 * ```
 */
function deleteFeature(feature, appName, next) {
  if ((typeof appName === 'function') && (! next)) {
    next = appName;
    appName = null;
  }
  var req = request.delete(baseEndpoint + '/features/' + feature);
  if (appName) req.query({ 'app' : appName });

  return req.end(next);
}
module.exports.deleteFeature = deleteFeature;
module.exports.removeFeature = deleteFeature;
module.exports.rmFeature = deleteFeature;

/**
 * ## Get Features
 * List features
 *
 * > GET /features
 *
 * ### Functions
 *   * getFeatures
 *   * listFeatures
 *
 *
 * ### Params
 *   * *appName {string} : The name of the Heroku app*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // List features on the account
 * api.getFeatures(function(err, res) {});
 * api.listFeatures(function(err, res) {});
 * // List features on an app
 * api.getFeatures('appName', function(err, res) {});
 * api.listFeatures('appName', function(err, res) {});
 * ```
 */
function getFeatures(appName, next) {
  if (typeof appName === 'function') {
    next = appName;
    appName = null;
  }
  var req = request.get(baseEndpoint + '/features');
  if (appName) req.query({ 'app' : appName });

  return req.end(next);
}
module.exports.getFeatures = getFeatures;
module.exports.listFeatures = getFeatures;

/**
 * ## Get Feature
 * Get information on a specific feature
 * > GET /features/:feature
 *
 * ### Functions
 *   * getFeature
 *
 *
 * ### Params
 *   * feature {string} : The name of the Heroku feature
 *   * *appName {string} : The name of the Heroku app*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * api.getFeature('sumo-rankings', function(err, res) {});
 * api.getFeature('user_env_compile', 'appName', function(err, res){});
 * ```
 */
function getFeature(feature, appName, next) {
  if ((typeof appName === 'function') && (! next)) {
    next = appName;
    appName = null;
  }
  var req = request.get(baseEndpoint + '/features/' + feature);
  if (appName) req.query({ 'app' : appName });

  return req.end(next);
}
module.exports.getFeature = getFeature;

/**
 * ## Add Feature
 * Add a feature to an account or app
 *
 * > POST /features/:feature
 *
 * ### Functions
 *   * postFeature
 *   * addFeature
 *
 *
 * ### Params
 *   * feature {string} : The name of the Heroku feature
 *   * *appName {string} : The name of the Heroku app*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // add Heroku Pipelines to the account
 * api.postFeature('sumo-rankings', function(err, res) {});
 * api.updateFeature('sumo-rankings', function(err, res) {});
 * // add 'user_env_compile' to an app
 * api.postFeature('user_env_compile', 'appName', function(err, res) {});
 * api.updateFeature('user_env_compile', 'appName', function(err, res) {});
 * ```
 */
function postFeature(feature, appName, next) {
  if ((typeof appName === 'function') && (! next)) {
    next = appName;
    appName = null;
  }
  var req = request.post(baseEndpoint + '/features/' + feature);
  if (appName) req.query({ 'app' : appName });

  return req.end(next);
}
module.exports.postFeature = postFeature;
module.exports.updateFeature = postFeature;
