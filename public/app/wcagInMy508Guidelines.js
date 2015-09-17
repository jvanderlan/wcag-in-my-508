/*globals angular */

(function () {
    'use strict';

    var configCommandRoutes = function ($stateProvider) {
            $stateProvider
                .state("guidelines", {
                    abstract    : true,
                    url         : '/guidelines',
                    templateUrl : '/app/guidelines/guidelines.html'
                })

                .state("guidelines.guideline", {
                    url         : '/:guidelineName',
                    templateUrl : function ($stateParams) {
                        return '/app/guidelines/' + $stateParams.guidelineName + '.html';
                    }
                });
        };

    angular.module('wcagInMy508.guidelines', ['ui.router'])
           .config(['$stateProvider', configCommandRoutes]);
}());