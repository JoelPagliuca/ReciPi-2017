'use strict';

angular.module('controllers')

    .controller('recipeListController', recipeListController);

recipeListController.$inject = ['$scope', 'recipeService'];

/**
 *
 * @param $scope
 * @param recipeService
 */
function recipeListController ($scope, recipeService) {
    var data = recipeService.getRecipes();
    $scope.recipes = data;
    $scope.recipesCount = data.length;
}