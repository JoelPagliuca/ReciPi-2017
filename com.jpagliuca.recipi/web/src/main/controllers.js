'user strict';

/** controls the list of recipes */
angular.module('controllers', [])

    .controller('recipeListController', function($scope, recipeListService) {
        var data = recipeListService.data;
        $scope.recipes = data;
        $scope.recipesCount = data.length;
    });