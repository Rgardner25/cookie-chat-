/**
 * # Stacks
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## List Stack
 * Get a list of the possible stacks for the app
 *
 * > GET /apps/:app/stack
 *
 * ### Functions
 *   * getStack
 *   * listStack
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getStack('appName', function(err, res) {});
 * api.listStack('appName', function(err, res) {});
 * ```
 */
function getStack(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/stack')
    .end(next);
}
module.exports.getStack = getStack;
module.exports.listStack = getStack;

/**
 * ## Update Stack
 * Update the stack an app sits upon
 *
 * > PUT /apps/:app/stack
 *
 * ### Functions
 *   * putStack
 *   * updateStack
 *   * setStack
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * stack {string} : String name of the stack
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.putStack('appName', 'bamboo-ree-1.8.7', function(err, res) {});
 * api.updateStack('appName', 'bamboo-ree-1.8.7', function(err, res) {});
 * api.setStack('appName', 'bamboo-ree-1.8.7', function(err, res) {});
 * ```
 */
function putStack(appName, stack, next) {
  return request
    .put(baseEndpoint + '/apps/' + appName + '/stack')
    .send(stack)
    .end(next);
}
module.exports.putStack = putStack;
module.exports.updateStack = putStack;
module.exports.setStack = putStack;
