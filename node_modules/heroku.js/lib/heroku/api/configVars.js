/**
 * # Config Vars
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Delete Config Var
 * Removes a configuration variable from an app
 *
 * > DELETE /apps/:app/config_vars/:key
 *
 * ### Functions
 *   * deleteConfigVar
 *   * removeConfigVar
 *   * rmConfigVar
 *   * deleteConfig
 *   * removeConfig
 *   * rmConfig
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * key {string} : The name of the configuration variable
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.deleteConfigVar('appName', 'NODE_ENV', function(err, res) {});
 * api.removeConfigVar('appName', 'NODE_ENV', function(err, res) {});
 * api.rmConfigVar('appName', 'NODE_ENV', function(err, res) {});
 * api.deleteConfig('appName', 'NODE_ENV', function(err, res) {});
 * api.removeConfig('appName', 'NODE_ENV', function(err, res) {});
 * api.rmConfig('appName', 'NODE_ENV', function(err, res) {});
 * ```
 */
function deleteConfigVar(appName, key, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/config_vars/' + key)
    .end(next);
}
module.exports.deleteConfigVar = deleteConfigVar;
module.exports.removeConfigVar = deleteConfigVar;
module.exports.rmConfigVar = deleteConfigVar;
module.exports.deleteConfig = deleteConfigVar;
module.exports.removeConfig = deleteConfigVar;
module.exports.rmConfig = deleteConfigVar;

/**
 * ## List Config Vars
 *
 * Get the list of configuration variables
 * > GET /apps/:app/config_vars
 *
 * ### Functions
 *   * getConfigVars
 *   * listConfigVars
 *   * getConfig
 *   * listConfig
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getConfigVars('appName', function(err, res) {});
 * api.listConfigVars('appName', function(err, res) {});
 * api.getConfig('appName', function(err, res) {});
 * api.listConfig('appName', function(err, res) {});
 * ```
 */
function getConfigVars(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/config_vars')
    .end(next);
}
module.exports.getConfigVars = getConfigVars;
module.exports.listConfigVars = getConfigVars;
module.exports.getConfig = getConfigVars;
module.exports.listConfig = getConfigVars;

/**
 * ## Add / Update Config Vars
 *
 * Add or replace configuration variables. It does not overwrite all vars,
 * it simply adds the ones listed to the existing list, overwriting any
 * that already exist.
 *
 * > PUT /apps/:app/config_vars
 *
 * ### Functions
 *   * putConfigVars
 *   * updateConfigVars
 *   * addConfigVars
 *   * putConfig
 *   * updateConfig
 *   * addConfig
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * vars {object} : Key : value of the configs adding/replacing
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.putConfigVars('appName', { "KEY" : "value" }, function(err, res) {});
 * api.putConfigVars('appName', { "KEY" : "value" }, function(err, res) {});
 * api.updateConfigVars('appName', { "KEY" : "value" }, function(err, res) {});
 * api.addConfigVars('appName', { "KEY" : "value" }, function(err, res) {});
 * api.putConfig('appName', { "KEY" : "value" }, function(err, res) {});
 * api.updateConfig('appName', { "KEY" : "value" }, function(err, res) {});
 * api.addConfig('appName', { "KEY" : "value" }, function(err, res) {});
 * ```
 */
function putConfigVars(appName, vars, next) {
  if (typeof vars !== 'object') vars = {};
  return request
    .put(baseEndpoint + '/apps/' + appName + '/config_vars')
    .send(vars)
    .end(next);
}
module.exports.putConfigVars = putConfigVars;
module.exports.updateConfigVars = putConfigVars;
module.exports.addConfigVars = putConfigVars;
module.exports.putConfig = putConfigVars;
module.exports.updateConfig = putConfigVars;
module.exports.addConfig = putConfigVars;
