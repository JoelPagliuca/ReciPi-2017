'use strict';

angular.module('recipi')

    .controller('recipeListController', recipeListController);

recipeListController.$inject = ['$scope', 'recipeService', 'notifications'];

/**
 * just gets the list of recipes and counts them
 * @param $scope
 * @param recipeService
 */
function recipeListController ($scope, recipeService, notifications) {
    // values
    $scope.recipes = [];
    $scope.recipesCount = 0;

    // functions for the services
    var saveRecipes = function(response) {
        $scope.recipes = response;
        $scope.recipesCount = response.length;
    };

    recipeService.getRecipes().success(saveRecipes);

    // sorting
    $scope.sortType = '';
    $scope.sortReverse= true;

    // searching
    $scope.searchName = '';

    $scope.delete = function(id) {
        var val = confirm("are you sure you want to delete this recipe?");
        if (val == true) {
            recipeService.deleteRecipe(id).success(function(data) {
                notifications.showError('Recipe deleted');
                for (var i = 0; i < $scope.recipes.length; i++) {
                    if ($scope.recipes[i].id == id) {
                        $scope.recipes.splice(i, 1);
                    }
                }
            });
        }
    }
}