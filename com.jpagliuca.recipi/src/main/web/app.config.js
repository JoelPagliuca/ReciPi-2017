'use strict';
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

app.config(['notificationsConfigProvider', function (notificationsConfigProvider) {
	// auto hide
	notificationsConfigProvider.setAutoHide(true);
	// delay before hide
	notificationsConfigProvider.setHideDelay(2500);
    // Set an animation for hiding the notification
	notificationsConfigProvider.setAutoHideAnimation('fadeOutNotifications');
}])