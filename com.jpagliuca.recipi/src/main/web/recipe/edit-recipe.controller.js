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
    $scope.allTags = [];
    $scope.allIngredients = [];

    var saveTags = function(response) {
        $scope.allTags = response;
    };
    var saveIngredients = function(response) {
        $scope.allIngredients = response;
    };
    var error = function(response){};

    recipeService.getTags(saveTags, error);
    recipeService.getIngredients(saveIngredients, error);

    // get the existing recipe if we've asked for one (also steps)
    $scope.recipe_id = $routeParams.id;
    if ($scope.recipe_id) {
        $scope.recipe = recipeService.getRecipe($scope.recipe_id);
        $scope.tags = $scope.recipe.tags;
        $scope.steps = recipeService.getSteps($scope.recipe_id);
        $scope.step_number = $scope.steps[$scope.steps.length-1].number + 1;
    } else {
        $scope.tags = [];
        $scope.recipe =  { tags: $scope.tags };
        $scope.steps = [];
        $scope.recipe.name = "";
        $scope.step_number = 1;
    }

    // editable variables
    $scope.step = {};
    $scope.tag = {};

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

    this.saveRecipe = function() {
        // save to the DB
    };
}