'use strict';

angular.module('services', [])

    .factory('recipeService', function() {

        return {
            getRecipes: getRecipes,
            getRecipe: getRecipe,

            getSteps: getSteps,

            getIngredients: getIngredients,
            getIngredient: getIngredient,

            getTags: getTags,
            getTag: getTag
        };

        function getSteps (id) {
            return step_data[id];
        }

        function getRecipes () {
            return recipe_data;
        }

        function getRecipe (id) {
            return recipe_data[id];
        }

        function getIngredients () {
            return ingredient_data;
        }

        function getIngredient (id) {
            return ingredient_data[id];
        }

        function getTags () {
            return tag_data;
        }

        function getTag (id) {
            return tag_data[id];
        }
    });

var tag_data = [
    { id: 0, name: 'dinner' },
    { id: 1, name: 'lunch' },
    { id: 2, name: 'poultry' },
    { id: 3, name: 'soup' }
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
        { number: 1, ingredient: 'pumpkin', description: 'squash up some pumpkin', unit:'kg', amount:1 },
        { number: 2, ingredient: 'water', description: 'add water', unit:'L', amount:0.5 }
    ],
    [
        { number: 1, ingredient: 'chicken', description: 'cook a chicked', unit:'unit', amount:1 },
        { number: 2, ingredient: 'herb', description: 'add herbs', unit:'g', amount:100 },
        { number: 3, ingredient: 'bread', description: 'serve with bread', unit:'loaf', amount:1 }
    ],
    [
        { number: 1, ingredient: 'bread', description: 'get a bread', unit:'loaf', amount:1 },
        { number: 2, ingredient: 'garlic', description: 'add garlic', unit:'clove', amount:5 },
        { number: 3, ingredient: 'bread', description: 'get another bread', unit:'loaf', amount:1 }
    ]
];

var ingredient_data = [
    { id: 0, name: 'pumpkin' },
    { id: 1, name: 'water' },
    { id: 2, name: 'chicken' },
    { id: 3, name: 'herb' },
    { id: 4, name: 'bread' },
    { id: 5, name: 'garlic' }
];