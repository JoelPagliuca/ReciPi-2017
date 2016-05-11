'use strict';

var app = angular.module('recipi', [
    'services',
    'controllers',
    'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider
            // home page
            .when('/home', {
                templateUrl: 'home.html'
            })

            // recipe view
            .when('/recipe', {
                templateUrl: 'recipe.html',
                controller: 'recipeController'
            })

            // recipe list view
            .when('/recipes', {
                templateUrl: 'recipe_list.html',
                controller: 'recipeListController'
            })
    });