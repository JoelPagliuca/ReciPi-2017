'use strict';

/** controls the list of recipes */
angular.module('controllers', [])

    .controller('recipeListController', function($scope, recipeService) {
        var data = recipeService.getRecipes();
        $scope.recipes = data;
        $scope.recipesCount = data.length;
    })

    .controller('stepListController', function($scope, $routeParams, recipeService) {
        $scope.recipe_id = $routeParams.id;
        var data = recipeService.getSteps($scope.recipe_id);
        $scope.recipe = recipeService.getRecipe($scope.recipe_id);
        $scope.steps = data;
        $scope.stepsCount = data.length;
    });