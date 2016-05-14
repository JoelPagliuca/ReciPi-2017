'use strict';

angular.module('controllers')

    .controller('homeController', homeController);

homeController.$inject = ['$scope', 'recipeService'];

/**
 * might do something more interesting in the future
 * at the moment just has a random recipe button
 * @param $scope
 * @param recipeService
 */
function homeController ($scope, recipeService) {
    var data = recipeService.getRecipes();
    $scope.recipesCount = data.length;
    var getRandomRecipe = function() {
        return Math.floor(Math.random()*$scope.recipesCount);
    };
    $scope.recipe_id = getRandomRecipe();
}