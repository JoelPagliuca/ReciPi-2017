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

        function getRecipe (id) {
            return recipe_data[id];
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

var recipe_data = [
    {
        id: 0,
        name: 'Pumpkin Soup',
        tags: [tag_data[0], tag_data[3]]
    },
    {
        id: 1,
        name: 'Herb Chicken',
        tags: [tag_data[0], tag_data[2]]
    },
    {
        id: 2,
        name: 'Garlic Bread',
        tags: [tag_data[1]]
    }
];

var step_data = [
    [
        {
            number: 1,
            ingredient: ingredient_data[0],
            description: 'squash up some pumpkin',
            unit:'kg',
            amount:1
        },
        {
            number: 2,
            ingredient: ingredient_data[1],
            description: 'add water',
            unit:'L',
            amount:0.5
        }
    ],
    [
        {
            number: 1,
            ingredient: ingredient_data[2],
            description: 'cook a chicked',
            unit:'unit',
            amount:1
        },
        {
            number: 2,
            ingredient: ingredient_data[3],
            description: 'add herbs',
            unit:'g',
            amount:100
        },
        {
            number: 3,
            ingredient: ingredient_data[4],
            description: 'serve with bread',
            unit:'loaf',
            amount:1
        }
    ],
    [
        {
            number: 1,
            ingredient: ingredient_data[4],
            description: 'get a bread',
            unit:'loaf',
            amount:1
        },
        {
            number: 2,
            ingredient: ingredient_data[5],
            description: 'add garlic',
            unit:'clove',
            amount:5
        },
        {
            number: 3,
            ingredient: ingredient_data[4],
            description: 'another one',
            unit:'loaf',
            amount:1
        }
    ]
];