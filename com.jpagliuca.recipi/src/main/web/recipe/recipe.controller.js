'use strict';

angular.module('recipi')

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

    $scope.recipe = {};
    $scope.tags = [];

    $scope.steps = [];
    $scope.ingredients = [];
    $scope.amount = {};
    $scope.unit = {};

    var saveRecipe = function(response) {
        $scope.recipe = response;
        $scope.tags = $scope.recipe.tags;
        $scope.steps = $scope.recipe.steps;
        var ingredientData = getIngredientList($scope.steps);
        // ingredients calculation
        $scope.ingredients = ingredientData.ingredients;
        // maps for amounts and quantities
        $scope.amount = ingredientData.amount;
        $scope.unit = ingredientData.unit;
    };
    // get the recipe id from the GET param
    $scope.recipe_id = $routeParams.id;

    // get the data
    recipeService.getRecipe($scope.recipe_id).success(saveRecipe);
}

/**
 * Calculates the ingredients list for a recipe given its steps
 * @param steps: Array
 * @returns {{ingredients: Array<Ingredient>, amount: {}, unit: {}}}
 */
function getIngredientList (steps) {
    // ingredients calculation
    var ingredients = [];
    // maps for amounts and quantities
    var amount = {}, // {ingredient -> amount}
        unit = {};   // {ingredient -> unit}
    // get all the unique ingredients
    for (var i = 0, len = steps.length; i<len; i++) {
        var ing = steps[i].ingredient.name;
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