'use strict';

/** controls the list of recipes */
angular.module('controllers', [])

    .controller('recipeListController', function($scope, recipeListService) {
        var data = recipeListService.data;
        $scope.recipes = data;
        $scope.recipesCount = data.length;
    })

    .controller('stepListController', function($scope, stepListService) {
        var data = stepListService.getSteps(1);
        $scope.steps = data;
        $scope.stepsCount = data.length;
    });