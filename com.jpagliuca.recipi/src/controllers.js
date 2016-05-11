'use strict';

/** controls the list of recipes */
angular.module('controllers', [])

    /**
     * gets a list of recipes
     */
    .controller('recipeListController', function($scope, recipeService) {
        var data = recipeService.getRecipes();
        $scope.recipes = data;
        $scope.recipesCount = data.length;
    })

    /**
     * gets the recipe and steps
     * calculates the ingredients list of the recipe
     */
    .controller('stepListController', function($scope, $routeParams, recipeService) {
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
    });

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