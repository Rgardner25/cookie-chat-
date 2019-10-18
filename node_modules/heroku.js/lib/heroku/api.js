/**
 * # Heroku API
 *
 * {{TOC}}
 *
 */
'use strict';

var extend = require('node.extend')

  , superagent = require('../helpers/superagent')

  , addons = require('./api/addons')
  , apps = require('./api/apps')
  , attachments = require('./api/attachments')
  , collaborators = require('./api/collaborators')
  , configVars = require('./api/configVars')
  , domains = require('./api/domains')
  , features = require('./api/features')
  , keys = require('./api/keys')
  , login = require('./api/login')
  , logs = require('./api/logs')
  , releases = require('./api/releases')
  , sslEndpoints = require('./api/sslEndpoints')
  , stacks = require('./api/stacks')
  , processes = require('./api/processes')
  , users = require('./api/users');

/**
 * ## HerokuAPI Constructor
 *
 * ### Params
 *   * *options {object} : Key : value of the credentials*
 *   * *next {Function} : Callback used in case of `username` and `password`*
 *
 *
 * ***Italic params are optional***
 *
 * ### Examples
 * ```js
 * // Instantiate with the `HEROKU_API_KEY` set in the environment
 * var api = new HerokuAPI();
 *
 * // Instantiate an API Key
 * var api = new HerokuAPI({"apiKey" : apiKey});
 *
 * // Instantiate with email and API Token
 * var api = new HerokuAPI({"email" : email, "apiToken" : apiToken});
 *
 * // Instantiate with username and password **Async reminder**
 * new HerokuAPI({ "username" : username, "password" : password }, function(api) {
 *   // Use the `api` here
 * });
 * ```
 */
function HerokuAPI(options, next) {
  var apiKey, username, password;
  if (typeof options !== 'object') options = {};

  apiKey = options.apiKey || process.env.HEROKU_API_KEY;
  if (! apiKey) {
    if (options.email && options.apiToken) {
      apiKey = '' + options.email + ':' + options.apiToken;
    } else if (options.username && options.password) {
      if (! next) {
        throw new Error('Creation with username and password is async and requires a callback');
      }
      return login.postLogin(options.username, options.password, function(err, res) {
        if(err) throw err;

        parseAPIKey.apply(this, [res.body['api_key']]);
      });
    }
    return parseAPIKey.apply(this, [apiKey]);
  }

  function parseAPIKey(key) {
    if (! key) throw new Error('No api token provided');
    var apiKey = new Buffer('' + key).toString('base64');

    superagent.setAPIKey(apiKey);
    if (next) return next(this);

    return this;
  }
}

extend(HerokuAPI.prototype,
    addons,
    apps,
    attachments,
    collaborators,
    configVars,
    domains,
    features,
    keys,
    logs,
    releases,
    sslEndpoints,
    stacks,
    processes,
    users
  );

module.exports = HerokuAPI;
