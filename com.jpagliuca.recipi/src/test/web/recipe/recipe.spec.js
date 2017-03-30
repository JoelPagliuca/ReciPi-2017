'use strict';

describe('recipeController', function() {

    var scope, service, controller;

    var recipe_data = [
    {
        "id": 0,
        "name": "Pumpkin Soup",
        "description": "A soup",
        "image": "data/images/pumpkinsoup.jpg",
        "tags": [{ "id": 0, "name": "dinner" }, { "id": 3, "name": "soup" }],
        "difficulty": "breezy",
        "serves": 1,
        "time": {"prep": 10, "cook": 20, "other": 0},
        "notes": []
    },
    {
        "id": 1,
        "name": "Herb Chicken",
        "description": "A gr8 Chikin dish that is interesting",
        "image": "data/images/herbchicken.jpg",
        "tags": [{ "id": 0, "name": "dinner" }, { "id": 2, "name": "poultry" }],
        "difficulty": "expert",
        "serves": 2,
        "time": {"prep": 15, "cook": 25, "other": 5},
        "notes": ["Herbs are great", "Notes are great"]
    },
    {
        "id": 2,
        "name": "Garlic Bread",
        "description": "lol garlic bread",
        "image": "data/images/garlicbread.jpg",
        "tags": [{ "id": 1, "name": "lunch" }],
        "difficulty": "tricky",
        "serves": 4,
        "time": {"prep": 5, "cook": 10, "other": 0},
        "notes": ["Will impress anyone"]
    }];
    var step_data = [
    [
        {
            "number": 1,
            "ingredient": { "id": 0, "name": "pumpkin" },
            "description": "squash up some pumpkin",
            "unit":"kg",
            "amount":1
        },
        {
            "number": 2,
            "ingredient": { "id": 1, "name": "water" },
            "description": "add water",
            "unit":"L",
            "amount":0.5
        }
    ],
    [
        {
            "number": 1,
            "ingredient": { "id": 2, "name": "chicken" },
            "description": "cook a chicked",
            "unit":"unit",
            "amount":1
        },
        {
            "number": 2,
            "ingredient": { "id": 3, "name": "herb" },
            "description": "add herbs",
            "unit":"g",
            "amount":100
        },
        {
            "number": 3,
            "ingredient": { "id": 4, "name": "bread" },
            "description": "serve with bread",
            "unit":"loaf",
            "amount":1
        }
    ],
    [
        {
            "number": 1,
            "ingredient": { "id": 4, "name": "bread" },
            "description": "get a bread",
            "unit":"loaf",
            "amount":1
        },
        {
            "number": 2,
            "ingredient": { "id": 5, "name": "garlic" },
            "description": "add garlic",
            "unit":"clove",
            "amount":5
        },
        {
            "number": 3,
            "ingredient": { "id": 4, "name": "bread" },
            "description": "another one",
            "unit":"loaf",
            "amount":1
        }
    ]];

    beforeEach(function() {
        module('recipi');
        service = {
            getRecipe: function(i){ return {then : function(fn){fn(recipe_data[i])}} },
            getSteps: function(i){ return {then : function(fn){fn(step_data[i])}} }
        };
    });

    describe('getIngredientList', function() {

        var test_ingre = [
            { id: 0, name: 'a'},
            { id: 1, name: 'b'},
            { id: 2, name: 'c'}
        ];
        var test_steps = [
            { ingredient: test_ingre[0], unit:'x', amount:1 },
            { ingredient: test_ingre[1], unit:'y', amount:2 },
            { ingredient: test_ingre[2], unit:'x', amount:3 }
        ];

        it('should do nothing for empty list', function() {
            var data = getIngredientList([]);
            expect(data.ingredients).toEqual([]);
            expect(data.amount).toEqual({});
            expect(data.unit).toEqual({});
        });

        it('should get a list of ingredients', function() {
            var data = getIngredientList(test_steps);
            expect(data.ingredients).toEqual(['a', 'b', 'c']);
            expect(Object.keys(data.amount)).toEqual(['a', 'b', 'c']);
            expect(Object.keys(data.unit)).toEqual(['a', 'b', 'c']);
        });

        it('should get the units correctly', function() {
            var data = getIngredientList(test_steps);
            expect(data.unit['a']).toBe('x');
            expect(data.unit['b']).toBe('y');
            expect(data.unit['c']).toBe('x');
        });

        it('should get the amounts correctly', function() {
            var data = getIngredientList(test_steps);
            expect(data.amount['a']).toBe(1);
            expect(data.amount['b']).toBe(2);
            expect(data.amount['c']).toBe(3);
        });

        it('should calculate the amount correctly', function() {
            test_steps[2].ingredient = test_ingre[0];
            var data = getIngredientList(test_steps);
            expect(data.amount['a']).toBe(4);
            test_steps[2].ingredient = 'c'; // undo
        });

    });

    describe('the controller under normal conditions', function() {

        beforeEach(inject(function ($rootScope, $controller) {
            spyOn(service, 'getRecipe').and.callThrough();
            spyOn(service, 'getSteps').and.callThrough();
            scope = $rootScope.$new();
            controller = $controller('recipeController', {
                $scope: scope,
                $routeParams: {id:1},
                recipeService: service
            }); //TODO
        }));

        it('should define the variables recipe, tags, steps, ingredients, amount, unit on scope', function() {
            expect(scope.recipe).toBeDefined();
            expect(scope.tags).toBeDefined();
            expect(scope.steps).toBeDefined();
            expect(scope.ingredients).toBeDefined();
            expect(scope.amount).toBeDefined();
            expect(scope.unit).toBeDefined();
        });

        it('should try to get the right recipe', function() {
            expect(service.getRecipe).toHaveBeenCalledWith(1);
        });

        it('should set the current recipe', function() {
            expect(scope.recipe).toBe(recipe_data[1]);
        });

        it('should get the tags from the recipe', function() {
            expect(scope.tags).toBe(recipe_data[1].tags);
        });

        it('should try to get the steps for the right recipe', function() {
            expect(service.getSteps).toHaveBeenCalledWith(1);
        });

        it('should get the steps for the recipe', function() {
            expect(scope.steps).toBe(step_data[1]);
        });

    });

});