'use strict';

function NamedErrors(name, message, response) {
  this.name = name;
  this.message = message;
  this.response = response;

  return this;
}

NamedErrors.prototype = Error.prototype;

module.exports = function responseToError(res) {
  if (res.status < 400) {
    return;
  }
  console.log('non-200', res);
  return;
  var err;
  switch (res.status) {
    case 401:
      break
    case 402:
      break;
    case 403:
      break;
    case 404:
      break;
    case 408:
      break;
    case 422:
      break;
    case 423:
      break;
    case 429:
      break;
    default:
      if (res.status >= 500) {

      } else {

      }
  }
}
