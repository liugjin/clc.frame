###
* File: guarder-module
* User: Dow
* Date: 2014/10/8
###

# compatible for node.js and requirejs
`if (typeof define !== 'function') { var define = require('amdefine')(module) }`

define ['angular', 'clc.materialize'], (angular) ->
  angular.module 'clc.frame', ['clc.materialize']
