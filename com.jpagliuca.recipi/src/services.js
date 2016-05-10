'use strict';

angular.module('services', [])

    .factory('recipeListService', function() {
        // do some db request
        return {
            data: recipe_data
        };
    })
    
    .factory('stepListService', function() {
        // talk with an api that gets steps

        var service = {
            getSteps: getSteps,
        };

        return service;

        function getSteps (id) {
            return step_data[id];
        };
    });

var recipe_data = [
    { id: 0, name: 'Pumpkin Soup' },
    { id: 1, name: 'Herb Chicken' },
    { id: 2, name: 'Garlic Bread' },
];

var step_data = [
    [
        { number: 1, ingredient: 'pumpkin', description: 'squash up some pumpkin', unit:'kg', amount:1 },
        { number: 2, ingredient: 'water', description: 'add water', unit:'L', amount:0.5 },
    ],
    [
        { number: 1, ingredient: 'chicken', description: 'cook a chicked', unit:'unit', amount:1 },
        { number: 2, ingredient: 'herb', description: 'add herbs', unit:'g', amount:100 },
        { number: 3, ingredient: 'bread', description: 'serve with bread', unit:'loaf', amount:1 },
    ],
];