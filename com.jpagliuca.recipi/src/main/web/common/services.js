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

    self.getSteps = function(recipe_id) {
        return $http.get(API+'/steps/'+recipe_id+'/');
    }

    self.getRecipes = function() {
        return $http.get(API+'/recipes/');
    }

    self.getRecipe = function(id) {
        return $http.get(API+'/recipes/'+id+'/');
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