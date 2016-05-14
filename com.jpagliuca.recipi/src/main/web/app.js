'use strict';

var app = angular.module('recipi', [
// dependencies
    'ngRoute',

    'services',
    'controllers'
])
    .config(function($routeProvider) {
        $routeProvider
            // home page
            .when('/home', {
                templateUrl: 'home.html'
            })

            // recipe view
            .when('/recipe', {
                templateUrl: 'recipe/recipe.html',
                controller: 'recipeController'
            })

            // recipe list view
            .when('/recipes', {
                templateUrl: 'recipeList/recipe_list.html',
                controller: 'recipeListController'
            })
    });