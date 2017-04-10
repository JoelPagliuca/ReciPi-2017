'use static';

angular.module('recipi')

    .controller('navbarController', navbarController);

navbarController.$inject = ['$scope'];

/**
 * functionality for navbar
 * @param $scope
 */
function navbarController ($scope) {
    $scope.login = function() {
        $http.post(
            "backend/api-token-auth/",
            {'username': $scope.username, 'password': $scope.password})
                .success(function(response) {
                    $scope.logged = true;
                    $scope.jwt = response.token;
                    store.set('token', response.token);
                }).error(function(response, status) {
                    $scope.logged = false;
                });
    }
    $scope.test = function() {
        console.log('hello');
    }
}