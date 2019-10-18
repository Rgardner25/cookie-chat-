/**
 * # Collaborators
 *
 * {{TOC}}
 */
'use strict';

var request = require('../../helpers/superagent')
  , baseEndpoint = process.env.HEROKU_API_ENDPOINT || "https://api.heroku.com";

module.exports = {};

/**
 * ## Delete Collaborator
 * Remove a collaborator from an app
 *
 * > DELETE /apps/:app/collaborators/:email
 *
 * ### Functions
 *   * deleteCollaborator
 *   * removeCollaborator
 *   * rmCollaborator
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * email {string} : Email address of the collaborator
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.deleteCollaborator('appName', 'email@example.com', function(err, res) {});
 * api.removeCollaborator('appName', 'email@example.com', function(err, res) {});
 * api.rmCollaborator('appName', 'email@example.com', function(err, res) {});
 * ```
*/
function deleteCollaborator(appName, email, next) {
  return request
    .delete(baseEndpoint + '/apps/' + appName + '/collaborators/' + email)
    .end(next);
}
module.exports.deleteCollaborator = deleteCollaborator;
module.exports.removeCollaborator = deleteCollaborator;
module.exports.rmCollaborator = deleteCollaborator;

/**
 * ## List Collaborators
 * Get a list of all of the collaborators of an app
 *
 * > GET /apps/:app/collaborators
 *
 * ### Functions
 *   * listCollaborators
 *   * removeCollaborator
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.getCollaborators('appName', function(err, res) {});
 * api.listCollaborators('appName', function(err, res) {});
 * ```
*/
function getCollaborators(appName, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/collaborators')
    .end(next);
}
module.exports.getCollaborators = getCollaborators;
module.exports.listCollaborators = getCollaborators;

/**
 * ## Add Collaborator
 * Add a new collaborator to an app
 *
 * > POST /apps/:app/collaborators
 *
 * ### Functions
 *   * postCollaborator
 *   * addCollaborator
 *   * createCollaborator
 *
 *
 * ### Params
 *   * appName {string} : The name of the Heroku app
 *   * email {string} : The Heroku email address of the new collaborator
 *   * next {Function} : Callback
 *
 *
 * ### Examples
 * ```js
 * api.postCollaborator('appName', 'email@example.com', function(err, res) {});
 * api.addCollaborator('appName', 'email@example.com', function(err, res) {});
 * api.createCollaborator('appName', 'email@example.com', function(err, res) {});
 * ```
*/
function postCollaborator(appName, email, next) {
  return request
    .get(baseEndpoint + '/apps/' + appName + '/collaborators')
    .query({ 'collaborators[email]' : email })
    .end(next);
}
module.exports.postCollaborator = postCollaborator;
module.exports.addCollaborator = postCollaborator;
module.exports.createCollaborator = postCollaborator;
