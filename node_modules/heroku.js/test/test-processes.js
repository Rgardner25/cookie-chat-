/*global Buffer:false,clearInterval:false,clearTimeout:false,console:false,exports:false,global:false,module:false,process:false,querystring:false,require:false,setInterval:false,setTimeout:false,__filename:false,__dirname:false */
/*global describe:false,it:false,before:false */
'use strict';

var expect = require('expect.js');

describe('Test processes:', function() {

  describe('Test GET ps:', function() {
    it('should return 200 and the processes information', function(done) {

    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test POST ps:', function() {
    it('should return 200 and the expected process information', function(done) {

    });

    describe('Given provided attachment', function() {
      it('should return 200 and expected process information', function(done) {

      });
    });
  });

  describe('Test POST ps restart:', function() {
    it('should return 200 and `ok`', function(done) {

    });

    describe('Given ps name', function() {
      it('should return 200 and `ok`', function(done) {

      });
    });

    describe('Given ps type', function() {
      it('should return 200 and `ok`', function(done) {

      });
    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test POST ps scale:', function() {
    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given scaling down', function() {
      it('should return 200 and the lower ps count', function(done) {

      });
    });

    describe('Given scale type not found', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });

    describe('Given scaling up', function() {
      it('should return 200 and the higher ps count', function(done) {

      });
    });

    describe('Given stack not cedar', function() {
      it('should return a RequestFailed error', function(done) {

      });
    });
  });

  describe('Test POST ps stop:', function() {
    it('should return a RequestFailed error', function(done) {

    });

    describe('Given a process name', function() {
      it('should return 200 and `ok`', function(done) {

      });
    });

    describe('Given a process type', function() {
      it('should return 200 and `ok`', function(done) {

      });
    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });
  });

  describe('Test PUT dynos:', function() {
    it('should return 200 and expect app object', function(done) {

    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given stack is Cedar', function() {
      it('should return RequestFailed error', function(done) {

      });
    });
  });

  describe('Test PUT workers:', function() {
    it('should return 200 and app object with workers', function(done) {

    });

    describe('Given app name not found', function() {
      it('should return a NotFound error', function(done) {

      });
    });

    describe('Given stack is Cedar', function() {
      it('should return RequestFailed error', function(done) {

      });
    });
  });

  describe('Test PUT formation:', function() {
    it('should return 200 and expected process size', function(done) {

    });
  });

  describe('Test GET dyno types', function() {
    it('should return 200 and array of dyno types', function(done) {

    });
  });

});
