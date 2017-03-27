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
        return $http.get(API+'/tags');
    }

    self.getTag = function(id) {
        return $http.get(API+'/tags/'+id+'/');
    }
}