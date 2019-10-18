Heroku.js
==========

The Node.js implementation of the Heroku API. Initially a port of
[Heroku.rb](https://github.com/heroku/heroku.rb), [Heroku.jar](https://github.com/heroku/heroku.jar)
and [Heroku.py](https://github.com/heroku/heroku.py), but with some Javascript-isms and some
aliases added for convention and convenience.

## Installation

1 Install via npm

```bash
npm install heroku.js
```

### Usage

Begin by instantiating with credentials. You can use an application API Key, 
a user email address and API Token, or a username and password. The latter will
fetch an API Key first, so it is an asynchronous request. It will require a callback.
If you pass nothing, it will attempt to read `process.env['HEROKU_API_KEY']`

```js
// Instantiate with the API Key in the environment
var api = new HerokuAPI();

// Instantiate with API Key
var api = new HerokuAPI({"apiKey" : apiKey});

// Instantiate with email and API Token
var api = new HerokuAPI({"email" : email, "apiToken" : apiToken});

// Instantiate with username and password **Async reminder**
new HerokuAPI({ "username" : username, "password" : password }, function(api) {
  // Use the `api` here
});
```

#### Create an application on the cedar stack

```js
var api = new HerokuAPI(apiKey);
var app = api.postApp({
  "stack" : "Cedar",
  "name" : "MyApp"
});
```

#### List applications

```js
var api = new HerokuAPI(apiKey);
var apps = api.getApps();
for (var i=0; l=apps.length; i < l; i++) {
  console.log(app.name);
}
```

#### Add Config

```js
var api = new HerokuAPI(apiKey);
api.putConfigVars("myExistingApp", { "SOME_KEY" : "SOMEVALUE" });
```

#### Get Config

```js
var api = new HerokuAPI(apiKey);
var config = api.getConfigVars("myExistingApp");
console.log(config);
```

#### Remove Config

```js
var api = new HerokuAPI(apiKey);
api.deleteConfigVar("myExistingApp", "SOME_KEY");
```

## Building Locally

1 Clone the repository

```bash
git clone https://github.com/dncrews/heroku.js.git
```

2 Run the testing suite (eventual - This is currently non-functional).

```bash
npm test
```

* Todo
  * Different Error Handling
      * Unauthorized
      * Verification Required
      * Forbidden
      * Not Found
      * Timeout
      * Locked
      * Rate Limit Exceeded
      * Request Failed
      * Nil App
  * Mock API
      * This one is HUGE. It's to make my tests actually work
