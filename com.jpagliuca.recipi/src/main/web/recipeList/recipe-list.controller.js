'use strict';

angular.module('controllers')

    .controller('recipeListController', recipeListController);

recipeListController.$inject = ['$scope', 'recipeService'];

/**
 * just gets the list of recipes and counts them
 * @param $scope
 * @param recipeService
 */
function recipeListController ($scope, recipeService) {
    var data = recipeService.getRecipes();
    $scope.recipes = data;
    $scope.recipesCount = data.length;

    // sorting
    $scope.sortType = '';
    $scope.sortReverse= true;
}