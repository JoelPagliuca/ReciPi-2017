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
                templateUrl: 'home/home.html',
                controller: homeController
            })

            // recipe view
            .when('/recipe', {
                templateUrl: 'recipe/recipe.html',
                controller: 'recipeController'
            })

            // recipe list view
            .when('/recipes', {
                templateUrl: 'recipeList/recipe-list.html',
                controller: 'recipeListController'
            })
    });