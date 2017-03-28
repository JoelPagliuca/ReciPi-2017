'use strict';

angular.module('recipi').service('recipeService', recipeService);

recipeService.$inject = ['$http', 'API'];

/**
 * basically, all of the interface with the api
 * @param {*} http does the http calls
 * @param {*} API API URL
 */
function recipeService($http, API) {

    var self = this;

    /**
     * get the steps for a recipe
     * @param {*} recipe_id
     */
    self.getSteps = function(recipe_id) {
        return $http.get(API+'/steps/'+recipe_id+'/');
    }

    self.postStep = function(recipe_id, step) {
        step.ingredient_pk = step.ingredient.id;
        step.recipe = recipe_id;
        delete step.ingredient;
        return $http.post(API+'/steps/', step)
    }

    /**
     * get all the recipes
     * TODO make a /count endpoint
     */
    self.getRecipes = function() {
        return $http.get(API+'/recipes/');
    }

    /**
     * get the full recipe, including steps
     */
    self.getRecipe = function(id) {
        return $http.get(API+'/recipes/'+id+'/');
    }

    /**
     * send a new recipe to the API
     */
    self.postRecipe = function(recipe) {
        return $http.post(API+'/recipes/', recipe);
    }

    self.deleteRecipe = function(id) {
        return $http.delete(API+'/recipes/'+id+'/');
    }

    /**
     * add a tag to a recipe
     */
    self.tagRecipe = function(recipe_id, tag_id) {
        return $http.post(API+'/recipes/'+recipe_id+'/tag/', {
            tag_id: tag_id
        });
    }

    self.getIngredients = function() {
        return $http.get(API+'/ingredients/');
    }

    self.getIngredient = function(id) {
        return $http.get(API+'/ingredients/'+id+'/');
    }

    self.getTags = function() {
        return $http.get(API+'/tags/');
    }

    self.getTag = function(id) {
        return $http.get(API+'/tags/'+id+'/');
    }
}