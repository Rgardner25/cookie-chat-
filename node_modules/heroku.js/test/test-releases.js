/*global Buffer:false,clearInterval:false,clearTimeout:false,console:false,exports:false,global:false,module:false,process:false,querystring:false,require:false,setInterval:false,setTimeout:false,__filename:false,__dirname:false */
/*global describe:false,it:false,before:false */
'use strict';

var expect = require('expect.js');

describe('Test releases:', function() {

  describe('Test GET releases:', function() {
    it('should return 200 and array of releases', function(done) {

    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test GET release:', function() {
    it('should return 200 and release object', function(done) {

    });

    describe('Given requesting `current`', function() {
      it('should return 200 and the current release object', function(done) {

      });
    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given release not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test POST release:', function() {
    it('should return 200', function(done) {

      // Body assertion?
    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given release not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

});
