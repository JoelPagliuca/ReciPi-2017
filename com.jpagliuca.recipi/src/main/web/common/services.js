'use strict';

var API = "http://127.0.0.1:8083/";

angular.module('services', [])

    .factory('recipeService', ['$http', function($http) {

        return {
            getRecipes: getRecipes,
            getRecipe: getRecipe,

            getIngredients: getIngredients,
            getIngredient: getIngredient,

            getTags: getTags,
            getTag: getTag
        };

        function getRecipes (success, error) {
            $http.get(API+'recipes/')
                .success(function(data) {
                    success(data);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getRecipe (id, success, error) {
            $http.get(API+'recipes/'+id)
                .success(function(data) {
                    success(data);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getIngredients (success, error) {
            $http.get(API+'ingredients/')
                .success(function(data) {
                    success(data);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getIngredient (id, success, error) {
            $http.get(API+'ingredients/')
                .success(function(data) {
                    success(data[id]);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getTags (success, error) {
            $http.get(API+'tags/')
                .success(function(data) {
                    success(data);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getTag (id, success, error) {
            $http.get(API+'tags/')
                .success(function(data) {
                    success(data[id]);
                })
                .error(function(data) {
                    error(data);
                });
        }
    }]);