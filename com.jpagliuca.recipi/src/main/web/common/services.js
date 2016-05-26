'use strict';

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
            $http.get('/data/ingredients.json')
                .success(function(data) {
                    success(data);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getIngredient (id) {
            return ingredient_data[id];
        }

        function getTags (success, error) {
            $http.get('/data/tags.json')
                .success(function(data) {
                    success(data);
                })
                .error(function(data) {
                    error(data);
                });
        }

        function getTag (id) {
            return tag_data[id];
        }
    }]);

var tag_data = [
    { id: 0, name: 'dinner' },
    { id: 1, name: 'lunch' },
    { id: 2, name: 'poultry' },
    { id: 3, name: 'soup' }
];

var ingredient_data = [
    { id: 0, name: 'pumpkin' },
    { id: 1, name: 'water' },
    { id: 2, name: 'chicken' },
    { id: 3, name: 'herb' },
    { id: 4, name: 'bread' },
    { id: 5, name: 'garlic' }
];