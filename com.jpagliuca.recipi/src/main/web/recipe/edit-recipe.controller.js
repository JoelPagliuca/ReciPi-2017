'use static';

angular.module('recipi')

    .controller('editRecipeController', editRecipeController);

editRecipeController.$inject = ['$scope', '$routeParams', 'recipeService'];

/**
 * at the moment, makes a new recipe
 * @param $scope
 * @param $routeParams
 * @param recipeService
 */
function editRecipeController ($scope, $routeParams, recipeService) {
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
    };
    var readSteps = function(response) {
        $scope.steps = response;
        $scope.step_number = $scope.steps[$scope.steps.length-1].number + 1;
    };

    recipeService.getTags().success(readTags);
    recipeService.getIngredients().success(readIngredients);

    // get the existing recipe if we've asked for one (also steps)
    $scope.recipe_id = $routeParams.id;
    if ($scope.recipe_id) {
        recipeService.getRecipe($scope.recipe_id).success(readRecipe);
        recipeService.getSteps($scope.recipe_id).success(readSteps);
    } else {
        $scope.recipe =  { tags: $scope.tags };
        $scope.recipe.name = "";
        $scope.step_number = 1;
    }

    // editable variables
    $scope.step = {};
    $scope.tag = {};

    /**
     * input validation
     */
    $scope.addTag = function() {
        recipeService.tagRecipe($scope.recipe_id, $scope.tag.id).success(function(data) {
            $scope.tags.push($scope.tag);
            $scope.tag = {};
        });
    };

    /**
     * TODO input validation
     */
    $scope.addStep = function() {
        $scope.step.number = $scope.step_number;
        $scope.steps.push($scope.step);
        $scope.step = {};
        $scope.step_number += 1;
    };

    /**
     * save action for the form
     */
    $scope.saveRecipe = function() {
        recipeService.postRecipe($scope.recipe)
            .success(function(data) {
                alert("saved");
            });
    };
}