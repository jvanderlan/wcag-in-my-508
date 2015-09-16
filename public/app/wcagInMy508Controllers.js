/*globals angular */

(function () {
    'use strict';

    var origin = function ($scope, commonFunctions) {
            $scope.test = 'test';

            $scope.attempt = function () {
                return 'attempt';
            };

            $scope.answer = commonFunctions.answer;
        };

    angular.module('wcagInMy508')
           .factory('commonFunctions', function () {
                return {
                    'answer' : function (value1, value2) {
                        console.log(value1, value2);
                        var v1 = typeof value1 === 'number' ? value1 : 0,
                            v2 = typeof value2 === 'number' ? value2 : 0;

                        return v1 + v2;
                    }
                };
           })
           .controller('origin', ['$scope', 'commonFunctions', origin]);
}());