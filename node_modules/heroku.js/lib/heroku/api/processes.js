/**
 * # Processes
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## List Processes
 * Gets a list of the processes of a specific app
 *
 * > GET /apps/:app/ps
 *
 * ### Functions
 *   * getPs
 *   * listPs
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getPs('appName', function(err, res) {});
 * api.listPs('appName', function(err, res) {});
 * ```
 */
function getPs(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/ps')
    .end(next);
}
module.exports.getPs = getPs;
module.exports.listPs = getPs;

/**
 * ## Post Command to Ps
 * Post a command to all processes (I think?)
 *
 * > POST /apps/:app/ps
 *
 * ### Functions
 *   * postPs
 *   * listPs
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * command {string} : The command you want to pass to the ps
 *   * *options {options} : Object of options to pass*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // passes `pwd` to each of the processes
 * api.postPs('appName', 'pwd', function(err, res) {});
 * // uses attach, whatever that is
 * api.postPs('appName', 'pwd', { 'attach' : true}, function(err, res) {});
 * ```
 */
function postPs(appName, command, options, next) {
  if (typeof options === 'function') {
    next = options;
    options = {};
  }
  if (typeof options !== 'object') options = {};
  options.command = typeof options.command !== 'undefined' ? options.command : true;

  return request
    .post(baseEndpoint + '/apps/' + appName + '/ps')
    .query(options)
    .end(next);
}
module.exports.postPs = postPs;

/**
 * ## Restart Processes
 * Request a restart of all or some of the processes of an app
 *
 * > POST /apps/:app/ps/restart
 *
 * ### Functions
 *   * postPsRestart
 *   * restartPs
 *   * restart
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * *options {options} : Object of options to pass*
 *   * next {Function} : Callback
 *
 *
 * ***Italic parameters are optional***
 *
 *
 * ### Examples
 * ```js
 * // restarts all processes
 * api.postPsRestart('appName', function(err, res) {});
 * api.restartPs('appName', function(err, res) {});
 * api.restart('appName', function(err, res) {});
 * // restarts a single process
 * api.postPsRestart('appName', {'ps' : 'web.1'}, function(err, res) {});
 * api.restartPs('appName', {'ps' : 'web.1'}, function(err, res) {});
 * api.restart('appName', {'ps' : 'web.1'}, function(err, res) {});
 * // restarts all web processes
 * api.postPsRestart('appName', {'type' : 'web'}, function(err, res) {});
 * api.restartPs('appName', {'type' : 'web'}, function(err, res) {});
 * api.restart('appName', {'type' : 'web'}, function(err, res) {});
 * ```
 */
function postPsRestart(appName, options, next) {
  if (typeof options === 'function') {
    next = options;
    options = {};
  }
  if (typeof options !== 'object') options = {};

  return request
    .post(baseEndpoint + '/apps/' + appName + '/ps/restart')
    .query(options)
    .end(next);
}
module.exports.postPsRestart = postPsRestart;
module.exports.restartPs = postPsRestart;
module.exports.restart = postPsRestart;

/**
 * ## Scale Processes
 * Scale processes of a certain type to a specified number
 *
 * > POST /apps/:app/ps/scale
 *
 * ### Functions
 *   * postPsScale
 *   * scalePs
 *   * scale
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * type {string} : Process type to scale
 *   * quantity {number} : Number of processes to scale to
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // scale web processes to 2
 * api.postPsScale('appName', 'web', 2, function(err, res) {});
 * api.scalePs('appName', 'web', 2, function(err, res) {});
 * api.scale('appName', 'web', 2, function(err, res) {});
 * // scale worker processes to 1
 * api.postPsScale('appName', 'worker', 1, function(err, res) {});
 * api.scalePs('appName', 'worker', 1, function(err, res) {});
 * api.scale('appName', 'worker', 1, function(err, res) {});
 * ```
 */
function postPsScale(appName, type, quantity, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ps/scale')
    .query({
      'type' : type,
      'qty' : quantity
    })
    .end(next);
}
module.exports.postPsScale = postPsScale;
module.exports.scalePs = postPsScale;
module.exports.scale = postPsScale;

/**
 * ## Stop Processes
 * Stop a process or processes of a type
 *
 * > POST /apps/:app/ps/stop
 *
 * ### Functions
 *   * postPsStop
 *   * stopPs
 *   * stop
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * options {object} : Key : Value of process list or types
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Stop a particular process
 * api.postPsStop('appName', {'ps' : 'web.1'}, function(err, res) {});
 * api.stopPs('appName', {'ps' : 'web.1'}, function(err, res) {});
 * api.stop('appName', {'ps' : 'web.1'}, function(err, res) {});
 * // Stop all worker processes
 * api.postPsStop('appName', {'type' : 'worker'}, function(err, res) {});
 * api.stopPs('appName', {'type' : 'worker'}, function(err, res) {});
 * api.stop('appName', {'type' : 'worker'}, function(err, res) {});
 * ```
 */
function postPsStop(appName, options, next) {
  if (typeof options !== 'object') options = {};
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ps/stop')
    .query(options)
    .end(next);
}
module.exports.postPsStop = postPsStop;
module.exports.stopPs = postPsStop;
module.exports.stop = postPsStop;

/**
 * ## Update Dyno Count
 * The old (bamboo) way of scaling dynos. Not compatible with Cedar stack
 *
 * > PUT /apps/:app/dynos
 *
 * ### Functions
 *   * putDynos
 *   * updateDynos
 *   * setDynos
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * dynos {number} : Number of dynos to scale to
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Scale Bamboo app to 2 dynos
 * api.putDynos('appName', 2, function(err, res) {});
 * api.updateDynos('appName', 2, function(err, res) {});
 * api.setDynos('appName', 2, function(err, res) {});
 * ```
 */
function putDynos(appName, dynos, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName + '/dynos')
    .query({
      'dynos' : dynos
    })
    .end(next);
}
module.exports.putDynos = putDynos;
module.exports.updateDynos = putDynos;
module.exports.setDynos = putDynos;

/**
 * ## Update Worker Count
 * The old (bamboo) way of scaling workers. Not compatible with Cedar stack
 *
 * > PUT /apps/:app/workers
 *
 * ### Functions
 *   * putWorkers
 *   * updateWorkers
 *   * setWorkers
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * workers {number} : Number of workers to scale to
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Scale Bamboo app to 2 workers
 * api.putWorkers('appName', 2, function(err, res) {});
 * api.updateWorkers('appName', 2, function(err, res) {});
 * api.setWorkers('appName', 2, function(err, res) {});
 * ```
 */
function putWorkers(appName, workers, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName + '/workers')
    .query({
      'workers' : workers
    })
    .end(next);
}
module.exports.putWorkers = putWorkers;
module.exports.updateWorkers = putWorkers;
module.exports.setWorkers = putWorkers;

/**
 * ## Set Dyno Size
 * Set the dyno size for all dynos in an app
 *
 * > PUT /apps/:app/formation
 *
 * ### Functions
 *   * putFormation
 *   * updateFormation
 *   * setFormation
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * options {object} : Key : value of type : size
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Set dyno size to 2x for all web dynos
 * api.putFormation('appName', {'web': '2X'}, function(err, res) {});
 * api.updateFormation('appName', {'web': '2X'}, function(err, res) {});
 * api.setFormation('appName', {'web': '2X'}, function(err, res) {});
 * ```
 */
function putFormation(appName, options, next) {
  if (typeof options !== 'object') options = {};
  return request
    .put(baseEndpoint + '/apps/' + appName + '/formation')
    .send(options)
    .end(next);
}
module.exports.putFormation = putFormation;
module.exports.updateFormation = putFormation;
module.exports.setFormation = putFormation;

/**
 * ## Get Dyno Types
 * Get the dyno types for the Heroku app
 *
 * > GET /apps/:app/dyno-types
 *
 * ### Functions
 *   * getDynoTypes
 *   * listDynoTypes
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * // Get the list of dyno types
 * api.getDynoTypes('appName', function(err, res) {});
 * api.listDynoTypes('appName', function(err, res) {});
 * ```
 */
function getDynoTypes(appName, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName + '/dyno-types')
    .end(next);
}
module.exports.getDynoTypes = getDynoTypes;
module.exports.listDynoTypes = getDynoTypes;
