'use strict';
/**
 * Configuration for the app
 */
var app = angular.module('recipi');

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

// AUTH

// get the token from the response or redirect to login page if there's an auth error
function authInterceptor($location, store) {
    return {
        // if a token was sent back, store it
        response: function(res) {
            if(res.data.token) { // TODO: check if the API is at the start of the config.url (using indexOf)
                store.set('token', res.data.token);
            }
            return res;
        },
        responseError: function(rejection) {
            if (rejection.status == 401) {
                $location.path("login");
            }
        }
    };
}
authInterceptor.$inject = ['$location', 'store'];
app.factory('authInterceptor', authInterceptor);
// https://www.octobot.io/blog/2016-11-11-json-web-token-jwt-authentication-in-a-djangoangularjs-web-app/
app.config(function($httpProvider, jwtInterceptorProvider) {
    jwtInterceptorProvider.tokenGetter = function(store) {
        return store.get('token');
    };
    $httpProvider.interceptors.push('authInterceptor');
    // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
    $httpProvider.interceptors.push('jwtInterceptor');
});

app.run(function(authManager) {
    authManager.checkAuthOnRefresh();
});