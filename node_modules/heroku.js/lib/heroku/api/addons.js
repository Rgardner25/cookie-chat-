/**
 * # Add-ons
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Delete Addon
 * Remove an addon from a specified app
 *
 * > DELETE /apps/:app/addons/:addon
 *
 * ### Functions
 *   * deleteAddon
 *   * removeAddon
 *   * rmAddon
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * addon {string} : The name of the addon
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Removes custom domains
 * api.deleteAddon('appName', 'custom_domains:basic', function(err, res) {});
 * api.removeAddon('appName', 'custom_domains:basic', function(err, res) {});
 * api.rmAddon('appName', 'custom_domains:basic', function(err, res) {});
 * ```
 */
function deleteAddon(appName, addon, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/addons/' + addon)
    .end(next);
}
module.exports.deleteAddon = deleteAddon;
module.exports.removeAddon = deleteAddon;
module.exports.rmAddon = deleteAddon;

/**
 * ## Get Addons
 * Get a list of addons used either in the whole account, or on an app
 *
 * > GET /addons
 * > GET /apps/:app/addons
 *
 * ### Functions
 *   * getAddons
 *   * listAddons
 *
 *
 * ### Params
 *   * *appName {string} : The name of the Heroku app*
 *   * addon {string} : The name of the addon
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // Get a list of all addons on an account (I think)
 * api.getAddons(function(err, res) {});
 * api.listAddons(function(err, res) {});
 * // Get a list of all addons on an app
 * api.getAddons('appName', function(err, res) {});
 * api.listAddons('appName', function(err, res) {});
 * ```
 */
function getAddons(appName, next) {
  if (typeof appName === 'function') {
    next = appName;
    appName = null;
  }
  var url = '';
  if (appName) url = '/apps/' + appName;
  return request
    .get(baseEndpoint + url + '/addons')
    .end(next);
}
module.exports.getAddons = getAddons;
module.exports.listAddons = getAddons;

/**
 * ## Add Addon
 * Add an addon to an app
 *
 * > POST /apps/:app/addons/:addon
 *
 * ### Functions
 *   * postAddon
 *   * addAddon
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * addon {string} : The name of the addon
 *   * *config {object} : Key : value of addon configuration*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // Add pgbackups addon to the app
 * api.postAddon('appName', 'pgbackups:basic', function(err, res) {});
 * api.addAddon('appName', 'pgbackups:basic', function(err, res) {});
 * // Add http deploy hooks to the app with configuration
 * api.postAddon('appName', 'deployhooks:http', { 'url' : 'http://example.com' }, function(err, res) {});
 * api.addAddon('appName', 'deployhooks:http', { 'url' : 'http://example.com' }, function(err, res) {});
 * ```
 */
function postAddon(appName, addon, config, next) {
  if (typeof config === 'function') {
    next = config;
    config = {};
  }
  if (typeof config !== 'object') config = {};

  return request
    .post(baseEndpoint + '/apps/' + appName + '/addons/' + addon)
    .query(config)
    .end(next);
}
module.exports.postAddon = postAddon;
module.exports.addAddon = postAddon;

/**
 *
 * ## Update Addon
 * Change addon levels
 *
 * > PUT /apps/:app/addons/:addon
 *
 * ### Functions
 *   * putAddon
 *   * updateAddon
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * addon {string} : The name of the addon
 *   * *config {object} : Key : value of addon configuration*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // Update pgbackups: addon to pgbackups:plus
 * api.putAddon('appName', 'pgbackups:plus', function(err, res) {});
 * api.updateAddon('appName', 'pgbackups:plus', function(err, res) {});
 * // Update pgbackups: addon to pgbackups:plus
 * api.putAddon('appName', 'pgbackups:plus', {}, function(err, res) {});
 * api.updateAddon('appName', 'pgbackups:plus', {}, function(err, res) {});
 * ```
 */
function putAddon(appName, addon, config, next) {
  if (typeof config === 'function') {
    next = config;
    config = {};
  }
  if (typeof config !== 'object') config = {};

  return request
    .put(baseEndpoint + '/apps/' + appName + '/addons/' + addon)
    .query(config)
    .end(next);
}
module.exports.putAddon = putAddon;
module.exports.updateAddon = putAddon;
