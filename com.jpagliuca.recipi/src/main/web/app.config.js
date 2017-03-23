'use strict';
/**
 * Configuration for the app
 */
angular.module('recipi')

/**
 * Routing config
 */
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

            // recipe edit view
            .when('/recipe/edit', {
                templateUrl: 'recipe/edit-recipe.html',
                controller: 'editRecipeController',
                controllerAs: 'editCtrl'
            })

            // recipe list view
            .when('/recipes', {
                templateUrl: 'recipeList/recipe-list.html',
                controller: 'recipeListController'
            })

    });