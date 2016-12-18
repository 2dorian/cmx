'use strict';

var appServices;
appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Test', ['$resource',
  function($resource){
    return $resource('tests/:testId.json', {}, {
      query: {method:'GET', params:{testId:'tests'}, isArray:true}
    });
  }]);
