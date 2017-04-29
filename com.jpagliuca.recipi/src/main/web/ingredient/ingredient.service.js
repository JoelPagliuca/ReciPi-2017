'use strict';

angular.module('recipi').service('ingredientService', ingredientService);

ingredientService.$inject = ['$http', 'API'];

/**
 * interface with the Ingredient API
 * @param {*} http does the http calls
 * @param {*} API API URL
 */
function ingredientService($http, API) {

    var self = this;

    self.getIngredients = function() {
        return $http.get(API+'/ingredients/');
    }

    self.getIngredient = function(id) {
        return $http.get(API+'/ingredients/'+id+'/');
    }

    self.delete = function(id) {
        return $http.delete(API+'/ingredients/'+id+'/');
    }

    self.create = function(ingredient) {
        return $http.post(API+'/ingredients/', ingredient);
    }
}