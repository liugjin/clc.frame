// Generated by IcedCoffeeScript 108.0.11

/*
* File: main-dashboard-directive
* User: David
* Date: 2019/05/20
* Desc:
 */
if (typeof define !== 'function') { var define = require('amdefine')(module) };
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['../base-directive', 'text!./style.css', 'text!./view.html', 'underscore', "moment"], function(base, css, view, _, moment) {
  var MainDashboardDirective, exports;
  MainDashboardDirective = (function(_super) {
    __extends(MainDashboardDirective, _super);

    function MainDashboardDirective($timeout, $window, $compile, $routeParams, commonService) {
      this.show = __bind(this.show, this);
      this.id = "main-dashboard";
      MainDashboardDirective.__super__.constructor.call(this, $timeout, $window, $compile, $routeParams, commonService);
    }

    MainDashboardDirective.prototype.setScope = function() {};

    MainDashboardDirective.prototype.setCSS = function() {
      return css;
    };

    MainDashboardDirective.prototype.setTemplate = function() {
      return view;
    };

    MainDashboardDirective.prototype.show = function(scope, element, attrs) {};

    MainDashboardDirective.prototype.resize = function(scope) {};

    MainDashboardDirective.prototype.dispose = function(scope) {};

    return MainDashboardDirective;

  })(base.BaseDirective);
  return exports = {
    MainDashboardDirective: MainDashboardDirective
  };
});
