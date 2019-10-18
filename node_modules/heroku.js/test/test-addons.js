/*global Buffer:false,clearInterval:false,clearTimeout:false,console:false,exports:false,global:false,module:false,process:false,querystring:false,require:false,setInterval:false,setTimeout:false,__filename:false,__dirname:false */
/*global describe:false,it:false,before:false */
'use strict';

var expect = require('expect.js');

describe('Test addons:', function() {

  describe('Test DELETE addon:', function() {
    it('should return 200 and uninstalled status', function(done) {

    });

    describe('Given addon not found, api', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given an existing addon that is not installed', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test GET addon:', function() {
    it('should return a 200 and valid JSON', function(done) {

    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test POST addon:', function() {
    it('should return a 200 and installed status', function(done) {

    });

    describe('Given an addon with config', function() {
      it('should return a 200 and installed status', function(done) {

      });

      it('should parse the config correctly', function(done) {

      });
    });

    describe('Given an addon already installed', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given an addon type already installed', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given an addon not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given an app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test PUT addon:', function() {
    it('should return a 200 and installed status', function(done) {

    });

    describe('Given a addon already installed', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given an addon not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given an addon type not installed', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given an app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

});
