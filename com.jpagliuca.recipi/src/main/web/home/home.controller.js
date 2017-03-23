'use strict';

angular.module('recipi')

    .controller('homeController', homeController);

homeController.$inject = ['$scope', 'recipeService'];

/**
 * might do something more interesting in the future
 * at the moment just has a random recipe button
 * @param $scope
 * @param recipeService
 */
function homeController ($scope, recipeService) {
    var getRandomRecipe = function(max) {
        return Math.floor(Math.random()*max);
    };

    var getRecipesCount = function(response) {
        $scope.recipesCount = response.length;
        $scope.recipe_id = getRandomRecipe($scope.recipesCount);
    }

    recipeService.getRecipes().success(getRecipesCount); //TODO endpoint for count
}