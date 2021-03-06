// Generated by IcedCoffeeScript 108.0.11

/*
* File: routes
* User: Dow
* Date: 2014/10/24
 */
if (typeof define !== "function") { var define = require("amdefine")(module) };
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["clc.foundation.angular/router"], function(base) {
  var Router, exports;
  Router = (function(_super) {
    __extends(Router, _super);

    function Router($routeProvider) {
      Router.__super__.constructor.call(this, $routeProvider);
    }

    Router.prototype.start = function() {
      var namespace, _ref;
      namespace = (_ref = window.setting.namespace) != null ? _ref : "frame";
      namespace += "/portal";
      this.routeTemplateUrl("/login", "/" + namespace + "/templates/login", "LoginController");
      this.routeTemplateUrl("/users/:user", "/" + namespace + "/templates/user", "UserController");
      this.routeTemplateUrl("/401", "/" + namespace + "/templates/401", "MainController");
      this.routeTemplateUrl("/", "/" + namespace + "/templates/index", "IndexController");
      this.routeTemplateUrl("/projects", "/" + namespace + "/templates/projects", "ProjectsController");
      this.routeTemplateUrl("/project/:user/:project", "/" + namespace + "/templates/project", "ProjectController");
      this.routeTemplateUrl("/frame/:user/:project", "/" + namespace + "/templates/frame", "PredictiveController");
      return Router.__super__.start.apply(this, arguments);
    };

    return Router;

  })(base.Router);
  return exports = {
    Router: Router
  };
});
