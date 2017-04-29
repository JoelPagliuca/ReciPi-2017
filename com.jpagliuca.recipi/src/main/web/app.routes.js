/**
 * Configuration for the app
 */
var app = angular.module('recipi');

/**
 * Routing config
 */
app.config(function($routeProvider) {
    $routeProvider
        // home page
        .when('/home', {
            templateUrl: 'home/home.html',
            controller: homeController
        })

        // login page
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: loginController
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

        // ingredient CRUD view
        .when('/ingredients', {
            templateUrl: 'ingredient/ingredient.html',
            controller: 'ingredientCtrl'
        })

        // tag CRUD view
        .when('/tags', {
            templateUrl: 'tag/tag.html',
            controller: 'tagCtrl'
        })

        .otherwise({
            templateUrl: 'home/home.html',
            controller: homeController
        })
});