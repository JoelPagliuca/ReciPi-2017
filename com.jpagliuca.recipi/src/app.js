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

            // recipe view
            .when('/recipe', {
                templateUrl: 'recipe.html',
                controller: 'stepListController'
            })

            // recipe list view
            .when('/recipes', {
                templateUrl: 'recipe_list.html',
                controller: 'recipeListController'
            })
    });