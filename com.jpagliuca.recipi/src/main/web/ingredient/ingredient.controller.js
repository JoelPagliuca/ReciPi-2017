'use strict';

angular.module('recipi')

    .controller('ingredientCtrl', ingredientCtrl);

ingredientCtrl.$inject = ['$scope', 'ingredientService', 'notifications'];

/**
 * CRUD ops for Ingredient
 * @param $scope
 * @param ingredientService
 */
function ingredientCtrl ($scope, ingredientService, notifications) {
    $scope.ingredients = [];
    // get all the ingredients
    ingredientService.getIngredients().then(function(response) {
        $scope.ingredients = response.data;
    });

    // delete function
    $scope.delete = function(target) {
        var val = confirm("are you sure you want to delete this ingredient?");
        if (val == true) {
            ingredientService.delete(target).then(function(data) {
                notifications.showSuccess('Ingredient deleted');
                for (var i = 0; i < $scope.ingredients.length; i++) {
                    if ($scope.ingredients[i].id == target) {
                        $scope.ingredients.splice(i, 1);
                    }
                }
            });
        }
    }
}