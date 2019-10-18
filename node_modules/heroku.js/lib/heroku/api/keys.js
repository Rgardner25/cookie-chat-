/**
 * # Keys
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Delete Key
 * Remove an SSH key from the account
 *
 * > DELETE /keys/:key
 *
 * ### Functions
 *   * deleteKey
 *   * removeKey
 *   * rmKey
 *
 *
 * ### Params
 *   * key {string} : The name of the SSH Key
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.deleteKey('user@computer.local', function(err, res) {});
 * api.removeKey('user@computer.local', function(err, res) {});
 * api.rmKey('user@computer.local', function(err, res) {});
 * ```
 */
function deleteKey(key, next) {
  return request
    .delete(baseEndpoint + '/keys/' + key)
    .end(next);
}
module.exports.deleteKey = deleteKey;
module.exports.removeKey = deleteKey;
module.exports.rmKey = deleteKey;

/**
 * ## Delete All Keys
 * Remove all SSH keys from the account
 *
 * > DELETE /keys
 *
 * ### Functions
 *   * deleteKeys
 *   * removeKeys
 *   * rmKeys
 *
 *
 * ### Params
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.deleteKeys(function(err, res) {});
 * api.removeKeys(function(err, res) {});
 * api.rmKeys(function(err, res) {});
 * ```
 */
function deleteKeys(next) {
  return request
    .delete(baseEndpoint + '/keys')
    .end(next);
}
module.exports.deleteKeys = deleteKeys;
module.exports.removeKeys = deleteKeys;
module.exports.rmKeys = deleteKeys;

/**
 * ## List Keys
 * Get a list of all SSH keys on the account
 *
 * > GET /keys
 *
 * ### Functions
 *   * getKeys
 *   * listKeys
 *
 *
 * ### Params
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getKeys(function(err, res) {});
 * api.listKeys(function(err, res) {});
 * ```
 */
function getKeys(next) {
  return request
    .get(baseEndpoint + '/keys')
    .end(next);
}
module.exports.getKeys = getKeys;
module.exports.listKeys = getKeys;

/**
 * ## Add Key
 * Add an SSH key to the account
 *
 * > POST /keys
 *
 * ### Functions
 *   * postKey
 *   * createKey
 *   * addKey
 *
 *
 * ### Params
 *   * key {string} : The full value of the SSH key
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.postKey('ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCz29znMi/UJX/nvkRSO5FFugKhU9DkkI53E0vXUnP8zeLFxMgyUqmXryPVjWtGzz2LRWqjm14SbqHAmM44pGHVfBIp6wCKBWSUYGv/FxOulwYgtWzz4moxWLZrFyWWgJAnehcVUifHNgzKwT2ovWm2ns52681Z8yFK3K8/uLStDjLIaPePEOaxaTvgIxZNsfyEoXoHcyTPwdR1GtQuDTuDYqYmjmPCoKybYnXrTQ1QFuQxDneBkswQYSl0H2aLf3uBK4F01hr+azXQuSe39eSV4I/TqzmNJlanpILT9Jz3/J1i4r6brpF3AxLnFnb9ufIbzQAIa/VZIulfrZkcBsUl user@computer.local', function(err, res) {});
 * api.createKey('ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCz29znMi/UJX/nvkRSO5FFugKhU9DkkI53E0vXUnP8zeLFxMgyUqmXryPVjWtGzz2LRWqjm14SbqHAmM44pGHVfBIp6wCKBWSUYGv/FxOulwYgtWzz4moxWLZrFyWWgJAnehcVUifHNgzKwT2ovWm2ns52681Z8yFK3K8/uLStDjLIaPePEOaxaTvgIxZNsfyEoXoHcyTPwdR1GtQuDTuDYqYmjmPCoKybYnXrTQ1QFuQxDneBkswQYSl0H2aLf3uBK4F01hr+azXQuSe39eSV4I/TqzmNJlanpILT9Jz3/J1i4r6brpF3AxLnFnb9ufIbzQAIa/VZIulfrZkcBsUl user@computer.local', function(err, res) {});
 * api.addKey('ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCz29znMi/UJX/nvkRSO5FFugKhU9DkkI53E0vXUnP8zeLFxMgyUqmXryPVjWtGzz2LRWqjm14SbqHAmM44pGHVfBIp6wCKBWSUYGv/FxOulwYgtWzz4moxWLZrFyWWgJAnehcVUifHNgzKwT2ovWm2ns52681Z8yFK3K8/uLStDjLIaPePEOaxaTvgIxZNsfyEoXoHcyTPwdR1GtQuDTuDYqYmjmPCoKybYnXrTQ1QFuQxDneBkswQYSl0H2aLf3uBK4F01hr+azXQuSe39eSV4I/TqzmNJlanpILT9Jz3/J1i4r6brpF3AxLnFnb9ufIbzQAIa/VZIulfrZkcBsUl user@computer.local', function(err, res) {});
 * ```
 */
function postKey(key, next) {
  return request
    .post(baseEndpoint + '/keys')
    .send(key)
    .end(next);
}
module.exports.postKey = postKey;
module.exports.createKey = postKey;
module.exports.addKey = postKey;
