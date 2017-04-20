'use strict';

angular.module('recipi').service('userService', userService);

userService.$inject = ['$http'];

/**
 * Service for handling users
 */
function userService($http) {
    
    var self = this;
    
    self.login = function(username, password) {
        return $http.post("/api-token-auth/", {
            'username': username,
            'password': password
        })
    }
}