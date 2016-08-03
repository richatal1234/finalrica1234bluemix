'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('stats',function() {
    	return {
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'comments': '@',
        'number': '=number',
        'name': '@',
        'colour': '@',
        'details':'@',
        'type':'@',
        'goto':'@'
  		},
      templateUrl:'scripts/directives/dashboard/stats/stats.html'
  		
  	}
  });
