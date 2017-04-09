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

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(['notificationsConfigProvider', function (notificationsConfigProvider) {
	// auto hide
	notificationsConfigProvider.setAutoHide(true);
	// delay before hide
	notificationsConfigProvider.setHideDelay(2500);
    // Set an animation for hiding the notification
	notificationsConfigProvider.setAutoHideAnimation('fadeOutNotifications');
}]);

// https://www.octobot.io/blog/2016-11-11-json-web-token-jwt-authentication-in-a-djangoangularjs-web-app/
app.config(function($httpProvider, jwtInterceptorProvider) {
    jwtInterceptorProvider.tokenGetter = function(store) {
        return store.get('token');
    };
    // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
    $httpProvider.interceptors.push('jwtInterceptor');
});