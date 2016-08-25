'use strict';

var API = "/api";

angular.module('services', [])

    .factory('recipeService', ['$http', function($http) {

        return {
            getRecipes: getRecipes,
            getRecipe: getRecipe,

            getSteps: getSteps,

            getIngredients: getIngredients,
            getIngredient: getIngredient,

            getTags: getTags,
            getTag: getTag
        };

        function getSteps (recipe_id, success, error) {
            $http.get('/data/steps.json')
                .success(function(data) {
                    success(data[recipe_id]);
                })
                .error(function(data) {
                    error(data[recipe_id]);
                });
        }

        function getRecipes (success, error) {
            $http.get('/data/recipes.json')
                .success(function(data) {
                    success(data);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getRecipe (id, success, error) {
            $http.get('/data/recipes.json')
                .success(function(data) {
                    success(data[id]);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getIngredients (success, error) {
            $http.get(API+'/ingredients')
                .success(function(data) {
                    success(data);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getIngredient (id, success, error) {
            $http.get(API+'/ingredients')
                .success(function(data) {
                    success(data[id]);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getTags (success, error) {
            $http.get(API+'/tags')
                .success(function(data) {
                    success(data);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getTag (id, success, error) {
            $http.get(API+'/tags')
                .success(function(data) {
                    success(data[id]);
                })
                .error(function(data) {
                    error(data);
                });
        }
    }]);