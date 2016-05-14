'use static';

angular.module('controllers')

    .controller('editRecipeController', editRecipeController);

editRecipeController.$inject = ['$scope', '$routeParams', 'recipeService'];

/**
 * at the moment, makes a new recipe
 * @param $scope
 * @param $routeParams
 * @param recipeService
 */
function editRecipeController ($scope, $routeParams, recipeService) {
    $scope.steps = {};
    $scope.tags = [];
    $scope.recipe = { tags: $scope.tags };
    $scope.recipe.name = "";

    $scope.step = {};

    this.addStep = function() {
        $scope.steps.push($scope.step);
        $scope.step = {};
    };
}