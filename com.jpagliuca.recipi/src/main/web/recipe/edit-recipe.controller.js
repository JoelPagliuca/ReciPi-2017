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
    $scope.allTags = recipeService.getTags();
    $scope.allIngredients = recipeService.getIngredients();

    $scope.steps = [];
    $scope.tags = [];
    $scope.recipe = { tags: $scope.tags };
    $scope.recipe.name = "";

    $scope.step = {};
    $scope.tag = {};
    $scope.step_number = 1;

    /**
     * TODO input validation
     */
    this.addTag = function() {
        $scope.tags.push($scope.tag);
        $scope.tag = {};
    };

    /**
     * TODO input validation
     */
    this.addStep = function() {
        $scope.step.number = $scope.step_number;
        $scope.steps.push($scope.step);
        $scope.step = {};
        $scope.step_number += 1;
    };
}