/*globals angular */

(function () {
    'use strict';

    var configCommandRoutes = function ($stateProvider) {
            $stateProvider
                .state("criteria", {
                    abstract    : true,
                    url         : '/criteria',
                    templateUrl : '/app/criteria/criteria.html'
                })

                .state("criteria.criteria", {
                    url         : '/:criteriaName',
                    templateUrl : function ($stateParams) {
                        return '/app/criteria/' + $stateParams.criteriaName + '.html';
                    }
                });
        };

    angular.module('wcagInMy508.criteria', ['ui.router'])
           .config(['$stateProvider', configCommandRoutes]);
}());