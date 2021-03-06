###
* File: frame-service
* User: Pu
* Date: 2018/9/1
* Desc: 
###

# compatible for node.js and requirejs
`if (typeof define !== 'function') { var define = require('amdefine')(module) }`

define ['clc.foundation.angular/services/rpc-service'], (base) ->
  class PredictiveService extends base.RpcService
    constructor: ($rootScope, httpService) ->
      super $rootScope, httpService

    echo: (parameters, callback) ->
      @rpc 'echo', parameters, callback


  exports =
    PredictiveService: PredictiveService
