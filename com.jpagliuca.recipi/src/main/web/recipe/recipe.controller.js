'use strict';

angular.module('controllers')

    .controller('recipeController', recipeController);

recipeController.$inject = ['$scope', '$routeParams', 'recipeService'];

/**
 * gets the recipe and steps
 * calculates the ingredients list of the recipe
 * @param $scope
 * @param $routeParams
 * @param recipeService
 */
function recipeController ($scope, $routeParams, recipeService) {
    // get the recipe id from the GET param
    $scope.recipe_id = $routeParams.id;

    // get the data
    $scope.recipe = recipeService.getRecipe($scope.recipe_id);
    $scope.steps = recipeService.getSteps($scope.recipe_id);

    var ingredientList = getIngredientList($scope.steps);
    // ingredients calculation
    $scope.ingredients = ingredientList.ingredients;
    // maps for amounts and quantities
    $scope.amount = ingredientList.amount;
    $scope.unit = ingredientList.unit;
}

/**
 * Calculates the ingredients list for a recipe given its steps
 * @param steps: Array
 * @returns {{ingredients: Array, amount: {}, unit: {}}}
 */
function getIngredientList (steps) {
    // ingredients calculation
    var ingredients = [];
    // maps for amounts and quantities
    var amount = {}, // {ingredient -> amount}
        unit = {};   // {ingredient -> unit}
    // get all the unique ingredients
    for (var i = 0, len = steps.length; i<len; i++) {
        var ing = steps[i].ingredient;
        var idx = ingredients.indexOf(ing);
        if (idx === -1) {
            ingredients.push(ing);
            amount[ing] = steps[i].amount;
            unit[ing] = steps[i].unit;
        } else {
            amount[ing] += steps[i].amount;
        }
    }
    return {
        ingredients: ingredients,
        amount: amount,
        unit: unit
    };
}