// Generated by IcedCoffeeScript 108.0.11
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["clc.foundation.angular/controllers/live-main-controller", "tripledes", "underscore"], function(base, des, _) {
  var LiveMainController, exports;
  LiveMainController = (function(_super) {
    __extends(LiveMainController, _super);

    function LiveMainController($scope, $rootScope, $routeParams, $location, $window, $translate, storage, authService, liveService, modelManager, modelEngine, $filter) {
      this.modelEngine = modelEngine;
      this.$filter = $filter;
      LiveMainController.__super__.constructor.call(this, $scope, $rootScope, $routeParams, $location, $window, $translate, storage, authService, modelManager, liveService);
    }

    LiveMainController.prototype.logout = function() {
      $('menu').hide();
      $('menu-control a').off('click');
      $('main').css('padding-left', '0');
      return this.authService.logout((function(_this) {
        return function(err) {
          var path, url;
          path = _this.$rootScope.lastPath;
          if (!path || path.indexOf('/401') >= 0 || path.indexOf('/error') >= 0) {
            path = "/";
          }
          url = "" + (_this.getBaseUrl()) + "/#/login?path=" + path;
          url = _this.encodeUrl(url);
          return _this.redirect("/" + _this.setting.namespace + "/#/login?url=" + url);
        };
      })(this));
    };

    return LiveMainController;

  })(base.LiveMainController);
  return exports = {
    LiveMainController: LiveMainController
  };
});