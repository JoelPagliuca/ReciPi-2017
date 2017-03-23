'use strict';

angular.module('recipi')

    .controller('recipeListController', recipeListController);

recipeListController.$inject = ['$scope', 'recipeService'];

/**
 * just gets the list of recipes and counts them
 * @param $scope
 * @param recipeService
 */
function recipeListController ($scope, recipeService) {
    // values
    $scope.recipes = [];
    $scope.recipesCount = 0;

    // functions for the services
    var saveRecipes = function(response) {
        $scope.recipes = response;
        $scope.recipesCount = response.length;
    };
    var error = function(){};

    recipeService.getRecipes().success(saveRecipes);

    // sorting
    $scope.sortType = '';
    $scope.sortReverse= true;

    // searching
    $scope.searchName = '';
}