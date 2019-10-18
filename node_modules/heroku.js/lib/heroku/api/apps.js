/**
 * # Apps
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Delete App
 * Delete an app
 *
 * > DELETE /apps/:app
 *
 *
 * ### Functions
 *   * deleteApp
 *   * removeApp
 *   * rmApp
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.deleteApp('appName', function(err, res) {});
 * ```
 */
function deleteApp(appName, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName)
    .end(next);
}
module.exports.deleteApp = deleteApp;
module.exports.removeApp = deleteApp;
module.exports.rmApp = deleteApp;

/**
 * ## List Apps
 * Get a list of all of your apps
 *
 * > GET /apps
 *
 * ### Functions
 *   * getApps
 *   * listApps
 *
 *
 * ### Params
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getApps(function(err, res) {});
 * ```
 */
function getApps(next) {
  return request
    .get(baseEndpoint + '/apps')
    .end(next);
}
module.exports.getApps = getApps;
module.exports.listApps = getApps;

/**
 * ## Get App
 * Get information on a specific app
 *
 * > GET /apps/:app
 *
 * ### Functions
 *   * getApp
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getApp('appName', function(err, res) {});
 * ```
 */
function getApp(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName)
    .end(next);
}
module.exports.getApp = getApp;

/**
 * # Check App Maintenance
 * Check to see if your app is in maintenance mode
 *
 * > GET /apps/:app/server/maintenance
 *
 * ### Functions
 *   * getAppMaintenance
 *   * checkAppMaintenance
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getAppMaintenance('appName', function(err, res) {});
 * api.checkAppMaintenance('appName', function(err, res) {});
 * ```
 */
function getAppMaintenance(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/server/maintenance')
    .end(next);
}
module.exports.getAppMaintenance = getAppMaintenance;
module.exports.checkAppMaintenance = getAppMaintenance;

/**
 * # Create App
 * Create a new app
 *
 * > POST /apps
 *
 * ### Functions
 *   * postApp
 *   * addApp
 *   * createApp
 *
 *
 * ### Params
 *   * *params {object} : Key : value of the new app parameters*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // Create a new app with all default values, including random generated name
 * api.postApp(function(err, res) {});
 * api.addApp(function(err, res) {});
 * api.createApp(function(err, res) {});
 * // Create an app named 'awesome-app'
 * api.postApp({ 'name' : 'awesome-app' }, function(err, res) {});
 * api.addApp({ 'name' : 'awesome-app' }, function(err, res) {});
 * api.createApp({ 'name' : 'awesome-app' }, function(err, res) {});
 * // Create an app on the Cedar stack
 * api.postApp({ 'stack' : 'cedar' }, function(err, res) {});
 * api.addApp({ 'stack' : 'cedar' }, function(err, res) {});
 * api.createApp({ 'stack' : 'cedar' }, function(err, res) {});
 * ```
 */
function postApp(params, next) {
  if (typeof params === 'function') {
    next = params;
    params = {};
  }
  if (typeof params !== 'object') params = {};

  return request
    .post(baseEndpoint + '/apps')
    .query(params)
    .end(next);
}
module.exports.postApp = postApp;
module.exports.addApp = postApp;
module.exports.createApp = postApp;

/**
 * ## Set App Maintenance
 * Put an app into or out of Maintenance Mode
 *
 * > POST /apps/:app/server/maintenance
 *
 * ### Functions
 *   * postAppMaintenance
 *   * setAppMaintenance
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * inMaintenance {boolean} : True if app should be in Maintenance Mode
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Put your app into maintenance mode
 * api.postAppMaintenance('appName', true, function(err, res) {});
 * api.setAppMaintenance('appName', true, function(err, res) {});
 * // Put your app out of maintenance mode
 * api.postAppMaintenance('appName', false, function(err, res) {});
 * api.setAppMaintenance('appName', false, function(err, res) {});
 * ```
 */
function postAppMaintenance(appName, inMaintenance, next) {
  inMaintenance = (inMaintenance === true || inMaintenance === 'true');

  return request
    .post(baseEndpoint + '/apps/' + appName + '/server/maintenance')
    .query({ "maintenance_mode" : inMaintenance })
    .end(next);
}
module.exports.postAppMaintenance = postAppMaintenance;
module.exports.setAppMaintenance = postAppMaintenance;

/**
 * # Update App
 * Update name, region (?), stack (?), or owner of an app
 *
 * > PUT /apps/:app
 *
 * ### Functions
 *   * putApp
 *   * updateApp
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * params {object} : Key : value parameters of what to change on the app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Change the name of your Heroku app to 'super-app'
 * api.putApp('appName', { 'name' : 'super-app' }, function(err, res) {});
 * api.updateApp('appName', { 'name' : 'super-app' }, function(err, res) {});
 * // Transfer ownership of your app to the user 'email@example.com'
 * api.putApp('appName', { 'transfer_owner' : 'email@example.com' }, function(err, res) {});
 * api.updateApp('appName', { 'transfer_owner' : 'email@example.com' }, function(err, res) {});
 * ```
 */
function putApp(appName, params, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName)
    .query(params)
    .end(next);
}
module.exports.putApp = putApp;
module.exports.updateApp = putApp;
