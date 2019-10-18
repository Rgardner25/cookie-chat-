/**
 * # SSL Endpoints
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Delete Endpoint
 * Remove an SSL endpoint from the app
 *
 * > DELETE /apps/:app/ssl-endpoints/:cname
 *
 * ### Functions
 *   * deleteSSLEndpoint
 *   * removeSSLEndpoint
 *   * rmSSLEndpoint
 *   * deleteSSL
 *   * removeSSL
 *   * rmSSL
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * cname {string} : The cname to remove the endpoint from
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.deleteSSLEndpoint('appName', 'example.herokussl.com', function(err, res) {});
 * api.removeSSLEndpoint('appName', 'example.herokussl.com', function(err, res) {});
 * api.rmSSLEndpoint('appName', 'example.herokussl.com', function(err, res) {});
 * api.deleteSSL('appName', 'example.herokussl.com', function(err, res) {});
 * api.removeSSL('appName', 'example.herokussl.com', function(err, res) {});
 * api.rmSSL('appName', 'example.herokussl.com', function(err, res) {});
 * ```
 */
function deleteSSLEndpoint(appName, cname, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + 'ssl-endpoints/' + cname)
    .end(next);
}
module.exports.deleteSSLEndpoint = deleteSSLEndpoint;
module.exports.removeSSLEndpoint = deleteSSLEndpoint;
module.exports.rmSSLEndpoint = deleteSSLEndpoint;
module.exports.deleteSSL = deleteSSLEndpoint;
module.exports.removeSSL = deleteSSLEndpoint;
module.exports.rmSSL = deleteSSLEndpoint;

/**
 * ## Get Endpoint
 * Get info on an SSL endpoint
 *
 * > GET /apps/:app/ssl-endpoints/:cname
 *
 * ### Functions
 *   * getSSLEndpoint
 *   * getSSL
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * cname {string} : The cname to remove the endpoint from
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getSSLEndpoint('appName', 'example.herokussl.com', function(err, res) {});
 * api.getSSL('appName', 'example.herokussl.com', function(err, res) {});
 * ```
 */
function getSSLEndpoint(appName, cname, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/ssl-endpoints/' + cname)
    .end(next);
}
module.exports.getSSLEndpoint = getSSLEndpoint;
module.exports.getSSL = getSSLEndpoint;

/**
 * ## List Endpoints
 * Get a list of all of the SSL endpoints for an app
 *
 * > GET /apps/:app/ssl-endpoints
 *
 * ### Functions
 *   * getSSLEndpoints
 *   * listSSLEndpoints
 *   * getSSLs
 *   * listSSLs
 *   * listSSL
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getSSLEndpoints('appName', function(err, res) {});
 * api.listSSLEndpoints('appName', function(err, res) {});
 * api.getSSLs('appName', function(err, res) {});
 * api.listSSLs('appName', function(err, res) {});
 * api.listSSL('appName', function(err, res) {});
 * ```
 */
function getSSLEndpoints(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/ssl-endpoints')
    .end(next);
}
module.exports.getSSLEndpoints = getSSLEndpoints;
module.exports.listSSLEndpoints = getSSLEndpoints;
module.exports.getSSLs = getSSLEndpoints;
module.exports.listSSLs = getSSLEndpoints;
module.exports.listSSL = getSSLEndpoints;

/**
 * ## Add Endpoint
 * Create an SSL Endpoint for an app
 *
 * > POST /apps/:app/ssl-endpoints
 *
 * ### Functions
 *   * postSSLEndpoint
 *   * createSSLEndpoint
 *   * addSSLEndpoint
 *   * postSSL
 *   * createSSL
 *   * addSSL
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * pem {string} : The string content of the pem file for the certificate
 *   * key {string} : The string content of the private key of the certificate
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.postSSLEndpoint('appName', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * api.createSSLEndpoint('appName', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * api.addSSLEndpoint('appName', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * api.postSSL('appName', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * api.createSSL('appName', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * api.addSSL('appName', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * ```
 */
function postSSLEndpoint(appName, pem, key, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ssl-endpoints')
    .query({ 'key' : key, 'pem' : pem })
    .end(next);
}
module.exports.postSSLEndpoint = postSSLEndpoint;
module.exports.createSSLEndpoint = postSSLEndpoint;
module.exports.addSSLEndpoint = postSSLEndpoint;
module.exports.postSSL = postSSLEndpoint;
module.exports.createSSL = postSSLEndpoint;
module.exports.addSSL = postSSLEndpoint;

/**
 * ## Roll Back Endpoint
 * Roll back to a previous ssl endpoint
 *
 * > POST /apps/:ssl-endpoints/:cname/rollback
 *
 * ### Functions
 *   * postSSLEndpointRollback
 *   * SSLRollback
 *   * rollbackSSL
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * cname {string} : The cname to remove the endpoint from
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.postSSLEndpointRollback('appName', 'example.herokussl.com', function(err, res) {});
 * api.SSLRollback('appName', 'example.herokussl.com', function(err, res) {});
 * api.rollbackSSL('appName', 'example.herokussl.com', function(err, res) {});
 * ```
 */
function postSSLEndpointRollback(appName, cname, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ssl-endpoints/' + cname + '/rollback')
    .end(next);
}
module.exports.postSSLEndpointRollback = postSSLEndpointRollback;
module.exports.SSLRollback = postSSLEndpointRollback;
module.exports.rollbackSSL = postSSLEndpointRollback;

/**
 * ## Update Endpoint
 * Update the contents of the SSL endpoint's certificate
 *
 * > PUT /apps/:app/ssl-endpoints/:cname
 *
 * ### Functions
 *   * putSSLEndpoint
 *   * updateSSLEndpoint
 *   * putSSL
 *   * updateSSL
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * cname {string} : The cname to remove the endpoint from
 *   * pem {string} : The string content of the pem file for the certificate
 *   * key {string} : The string content of the private key of the certificate
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.putSSLEndpoint('appName', 'example.herokussl.com', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * api.updateSSLEndpoint('appName', 'example.herokussl.com', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * api.putSSL('appName', 'example.herokussl.com', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * api.updateSSL('appName', 'example.herokussl.com', fs.readFileSync('cert.pem'), fs.readFileSync('cert.key'), function(err, res) {});
 * ```
 */
function putSSLEndpoint(appName, cname, pem, key, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/ssl-endpoints/' + cname)
    .query({ 'key' : key, 'pem' : pem })
    .end(next);
}
module.exports.putSSLEndpoint = putSSLEndpoint;
module.exports.updateSSLEndpoint = putSSLEndpoint;
module.exports.putSSL = putSSLEndpoint;
module.exports.updateSSL = putSSLEndpoint;
