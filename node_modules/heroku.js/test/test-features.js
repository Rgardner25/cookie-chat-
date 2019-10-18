/*global Buffer:false,clearInterval:false,clearTimeout:false,console:false,exports:false,global:false,module:false,process:false,querystring:false,require:false,setInterval:false,setTimeout:false,__filename:false,__dirname:false */
/*global describe:false,it:false,before:false */
'use strict';

var expect = require('expect.js');

describe('Test features:', function() {

  describe('Test DELETE feature:', function() {
    it('should return 200 and features object', function(done) {

    });

    describe('Given app name not found', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given feature not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test GET features:', function() {
    it('should return 200 and JSON features', function(done) {

    });
  });

  describe('Test GET feature:', function() {
    it('should return 200 and feature object', function(done) {

    });

    describe('Given feature not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test POST feature:', function() {
    it('should return 201 and feature object with enabled set to true', function(done) {

    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given feature not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

});
