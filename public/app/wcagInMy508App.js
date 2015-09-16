/*globals angular */

(function () {
    'use strict';
    var run = function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        },

        configRoutes = function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/');

            $stateProvider
                .state("home", {
                    url         : '/',
                    templateUrl : '/app/index/index.html'
                })

                .state("five-oh-eight", {
                    url         : '/five-oh-eight',
                    templateUrl : '/app/five-oh-eight/five-oh-eight.html'
                })

                .state("wcag-two-dot-oh", {
                    url         : '/wcag-two-dot-oh',
                    templateUrl : '/app/wcag-two-dot-oh/wcag-two-dot-oh.html'
                })

                .state("aria", {
                    url         : '/aria',
                    templateUrl : '/app/aria/aria.html'
                })

                .state("practice", {
                    url         : '/practice',
                    templateUrl : '/app/practice/practice.html'
                });
        };

    angular.module('wcagInMy508', [
        'wcagInMy508.criteria',
        'ui.router',
        'ngAnimate'
    ])
           .run(['$rootScope', '$state', '$stateParams', run])
           .config(['$stateProvider', '$urlRouterProvider', configRoutes]);
}());