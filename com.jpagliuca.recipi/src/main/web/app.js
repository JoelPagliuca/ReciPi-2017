'use strict';

var app = angular.module('recipi', [
// dependencies
    'ngRoute',

    'services',
    'controllers',
    'directives'
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

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);