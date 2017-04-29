'use strict';

angular.module('recipi')

    .controller('ingredientCtrl', ingredientCtrl);

ingredientCtrl.$inject = ['$scope', 'ingredientService'];

/**
 * CRUD ops for Ingredient
 * @param $scope
 * @param ingredientService
 */
function ingredientCtrl ($scope, ingredientService) {
    $scope.ingredients = [];
    // get all the ingredients
    ingredientService.getIngredients().then(function(response) {
        $scope.ingredients = response.data;
    });
}