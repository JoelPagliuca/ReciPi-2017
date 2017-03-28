'use static';

angular.module('recipi')

    .controller('editRecipeController', editRecipeController);

editRecipeController.$inject = ['$scope', '$routeParams', 'recipeService', 'notifications'];

/**
 * at the moment, makes a new recipe
 * @param $scope
 * @param $routeParams
 * @param recipeService
 * @param notifications
 */
function editRecipeController ($scope, $routeParams, recipeService, notifications) {
    $scope.allTags = [];
    $scope.allIngredients = [];

    $scope.recipe = {};
    $scope.tags = [];
    $scope.steps = [];

    var readTags = function(response) {
        $scope.allTags = response;
    };
    var readIngredients = function(response) {
        $scope.allIngredients = response;
    };
    var readRecipe = function(response) {
        $scope.recipe = response;
        $scope.tags = $scope.recipe.tags;
        $scope.steps = $scope.recipe.steps;
        if ($scope.steps.length != 0) {
            $scope.step_number = $scope.steps[$scope.steps.length-1].number + 1;
        } else {
            $scope.step_number = 1;
        }
    };

    recipeService.getTags().success(readTags);
    recipeService.getIngredients().success(readIngredients);

    // get the existing recipe if we've asked for one (also steps)
    $scope.recipe_id = $routeParams.id;
    if ($scope.recipe_id) {
        recipeService.getRecipe($scope.recipe_id).success(readRecipe);
    } else {
        $scope.recipe =  { tags: $scope.tags };
        $scope.recipe.name = "";
        $scope.step_number = 1;
    }

    // editable variables
    $scope.step = {};
    $scope.tag = {};

    $scope.addTag = function() {
        recipeService.tagRecipe($scope.recipe_id, $scope.tag.id).success(function(data) {
            $scope.tags.push($scope.tag);
            $scope.tag = {};
        });
    };

    $scope.addStep = function() {
        $scope.step.number = $scope.step_number;
        recipeService.postStep($scope.recipe_id, $scope.step).success(function(data){
            $scope.steps.push($scope.step);
            $scope.step = {};
            $scope.step_number += 1;
        });
    };

    /**
     * save action for the form, change to "edit recipe" mode
     */
    $scope.saveRecipe = function() {
        recipeService.postRecipe($scope.recipe)
            .success(function(data) {
                $scope.recipe_id = data.id;
                notifications.showSuccess('Recipe saved');
            });
    };
}