/*global Buffer:false,clearInterval:false,clearTimeout:false,console:false,exports:false,global:false,module:false,process:false,querystring:false,require:false,setInterval:false,setTimeout:false,__filename:false,__dirname:false */
/*global describe:false,it:false,before:false */
'use strict';

var expect = require('expect.js');

describe('Test apps:', function() {

  describe('Test DELETE app:', function() {
    it('should return a 200 and an empty json object', function(done) {

    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test GET apps:', function() {
    it('should return a json object with apps', function(done) {

    });
  });

  describe('Test GET app:', function() {
    it('should return a 200 and a json object with a `name` attribute', function(done) {

    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given an app under maintenance', function() {
      it('should return the app with the mainenance flag set', function(done) {

      });
    });
  });

  describe('Test POST app:', function() {
    it('should create an app', function(done) {

    });

    describe('Given an app name', function() {
      it('should create an app with the given name', function(done) {

      });
    });

    describe('Given a duplicate app name', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given a stack name', function() {
      it('should create an app with the given stack', function(done) {

      });
    });
  });

  describe('Test PUT app:', function() {
    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given new app name', function() {
      it('should return 200 and json object with new app name', function(done) {

      });
    });

    describe('Given new owner who is not a collaborator', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given a new owner', function() {
      it('should return a 200 with the app json', function(done) {

      });
    });

    describe('Given posting app maintenance', function() {
      it('should set the app into mainenance mode', function(done) {

      });
    });
  });

});
