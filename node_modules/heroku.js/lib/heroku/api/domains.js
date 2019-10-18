/**
 * # Domains
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Delete Domain
 * Remove a domain from an app
 *
 * > DELETE /apps/:app/domains/:domain
 *
 * ### Functions
 *   * deleteDomain
 *   * removeDomain
 *   * rmDomain
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * domain {string} : The domain name
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.deleteDomain('appName', 'example.com', function(err, res) {});
 * api.removeDomain('appName', 'example.com', function(err, res) {});
 * api.rmDomain('appName', 'example.com', function(err, res) {});
 * ```
 */
function deleteDomain(appName, domain, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/domains/' + domain)
    .end(next);
}
module.exports.deleteDomain = deleteDomain;
module.exports.removeDomain = deleteDomain;
module.exports.rmDomain = deleteDomain;

/**
 * ## Delete Domains
 * Remove all domains from an app
 *
 * > DELETE /apps/:app/domains
 *
 * ### Functions
 *   * deleteDomains
 *   * removeDomains
 *   * rmDomains
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * @param  {string}   appName The name of the Heroku app
 * @param  {Function} next
 *
 *
 * ### Examples
 * ```js
 * api.deleteDomains('appName', function(err, res) {});
 * api.removeDomains('appName', function(err, res) {});
 * api.rmDomains('appName', function(err, res) {});
 * ```
 */
function deleteDomains(appName, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/domains')
    .end(next);
}
module.exports.deleteDomains = deleteDomains;
module.exports.removeDomains = deleteDomains;
module.exports.rmDomains = deleteDomains;

/**
 * ## Get Domains
 * Get a list of the domains of an app
 * > GET /apps/:app/domains
 *
 * ### Functions
 *   * getDomains
 *   * listDomains
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getDomains('appName', function(err, res) {});
 * api.listDomains('appName', function(err, res) {});
 * ```
 */
function getDomains(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/domains')
    .end(next);
}
module.exports.getDomains = getDomains;
module.exports.listDomains = getDomains;

/**
 * ## Add Domain
 * Add a domain to an app
 *
 * > POST /apps/:app/domains
 *
 * ### Functions
 *   * postDomain
 *   * addDomain
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * domain {string} : The domain name to add
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.postDomain('appName', 'example.com', function(err, res) {});
 * api.addDomain('appName', 'example.com', function(err, res) {});
 * ```
 */
function postDomain(appName, domain, next) {
  return request
    .post(baseEndpoint + '/apps/' + appName + '/domains')
    .query({ 'domain_name[domain]' : domain })
    .end(next);
}
module.exports.postDomain = postDomain;
module.exports.addDomain = postDomain;
