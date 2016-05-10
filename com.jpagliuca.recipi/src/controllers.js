'use strict';

/** controls the list of recipes */
angular.module('controllers', [])

    .controller('recipeListController', function($scope, recipeListService) {
        var data = recipeListService.data;
        $scope.recipes = data;
        $scope.recipesCount = data.length;
    })

    .controller('stepListController', function($scope, stepListService, $routeParams) {
        $scope.recipe_id = $routeParams.id;
        var data = stepListService.getSteps($scope.recipe_id);
        $scope.steps = data;
        $scope.stepsCount = data.length;
    });