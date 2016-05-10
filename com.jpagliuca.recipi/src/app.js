'use strict';

var app = angular.module('recipi', [
    'services',
    'controllers',
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider
            // home page
            .when('/', {
                templateUrl: 'home.html'
            })

            .when('/recipe', {
                templateUrl: 'recipe.html',
                controller: 'stepListController'
            })
    });