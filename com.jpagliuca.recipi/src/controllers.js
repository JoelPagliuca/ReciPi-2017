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

        // ingredients calculation
        $scope.ingredients = [];
        // maps for amounts and quantities
        $scope.amount = {};
        $scope.unit = {};
        // get all the unique ingredients
        for (var i = 0, len = data.length; i<len; i++) {
            var ing = $scope.steps[i].ingredient;
            var idx = $scope.ingredients.indexOf(ing);
            if (idx === -1) {
                $scope.ingredients.push(ing);
                $scope.amount[ing] = $scope.steps[i].amount;
                $scope.unit[ing] = $scope.steps[i].unit;
            } else {
                $scope.amount[ing] += $scope.steps[i].amount;
            }
        }
        console.log($scope.amount);
    });