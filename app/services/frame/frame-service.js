// Generated by IcedCoffeeScript 108.0.11

/*
* File: frame-service
* User: Pu
* Date: 2018/9/1
* Desc:
 */
if (typeof define !== 'function') { var define = require('amdefine')(module) };
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['clc.foundation.web', 'iced-coffee-script'], function(base, iced) {
  var PredictiveService, exports;
  if (iced.iced) {
    iced = iced.iced;
  }
  PredictiveService = (function(_super) {
    __extends(PredictiveService, _super);

    function PredictiveService(options) {
      PredictiveService.__super__.constructor.call(this, options);
    }

    PredictiveService.prototype.initializeProcedures = function() {
      return this.registerProcedure(['echo']);
    };

    PredictiveService.prototype.echo = function(options, callback) {
      var result, time;
      time = options.parameters.time + (" -- server: " + (new Date().toISOString()));
      result = {
        time: time
      };
      return typeof callback === "function" ? callback(null, result) : void 0;
    };

    return PredictiveService;

  })(base.RpcService);
  return exports = {
    PredictiveService: PredictiveService
  };
});
