'use static';

angular.module('recipi')

    .controller('editRecipeController', editRecipeController);

editRecipeController.$inject = ['$scope', '$routeParams', 'recipeService', 'notifications', 'MEDIA_URL'];

/**
 * at the moment, makes a new recipe
 * @param $scope
 * @param $routeParams
 * @param recipeService
 * @param notifications
 */
function editRecipeController ($scope, $routeParams, recipeService, notifications, MEDIA_URL) {
    $scope.allTags = [];
    $scope.allIngredients = [];

    $scope.recipe = {};
    $scope.tags = [];
    $scope.steps = [];

    var readTags = function(response) {
        $scope.allTags = response.data;
    };
    var readIngredients = function(response) {
        $scope.allIngredients = response.data;
    };
    var readRecipe = function(response) {
        $scope.recipe = response.data;
        $scope.recipe.image = MEDIA_URL + $scope.recipe.image; // FIXME copypaste
        $scope.tags = $scope.recipe.tags;
        $scope.steps = $scope.recipe.steps;
        if ($scope.steps.length != 0) {
            $scope.step_number = $scope.steps[$scope.steps.length-1].number + 1;
        } else {
            $scope.step_number = 1;
        }
    };

    recipeService.getTags().then(readTags);
    recipeService.getIngredients().then(readIngredients);

    // get the existing recipe if we've asked for one (also steps)
    $scope.recipe_id = $routeParams.id;
    if ($scope.recipe_id) {
        recipeService.getRecipe($scope.recipe_id).then(readRecipe);
    } else {
        $scope.recipe =  { tags: $scope.tags };
        $scope.recipe.name = "";
        $scope.step_number = 1;
    }

    // editable variables
    $scope.step = {};
    $scope.tag = {};

    $scope.addTag = function() {
        recipeService.tagRecipe($scope.recipe_id, $scope.tag.id).then(function(data) {
            $scope.tags.push($scope.tag);
            $scope.tag = {};
        });
    };

    $scope.addStep = function() {
        $scope.step.number = $scope.step_number;
        recipeService.postStep($scope.recipe_id, $scope.step).then(function(data){
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
            .then(function(data) {
                $scope.recipe_id = data.id;
                notifications.showSuccess('Recipe saved');
            });
    };

    $scope.updateRecipe = function() {
        recipeService.putRecipe($scope.recipe_id, $scope.recipe)
            .then(function(data) {
                notifications.showSuccess('Recipe updated');
            });
    }
}