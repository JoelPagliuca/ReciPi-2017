'use strict';

angular.module('services', [])

    .factory('recipeListService', function() {
        // do some db request
        return {
            data: [
                { id: 0, name: 'Pumpkin Soup' },
                { id: 1, name: 'Herb Chicken' },
                { id: 2, name: 'Garlic Bread' },
            ]
        };
    });