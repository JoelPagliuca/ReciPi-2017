'use strict';

describe('editRecipeController', function() {

    var scope, service, controller, routeParams;
    var tag_data = [
        { "id": 0, "name": "dinner" },
        { "id": 1, "name": "lunch" }
    ];
    var ingredient_data = [
        { "id": 0, "name": "pumpkin" },
        { "id": 1, "name": "water" }
    ];
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
        "notes": [],
        "steps": [
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
        ]
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
        "notes": ["Herbs are great", "Notes are great"],
        "steps": [
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
        ]
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
        "notes": ["Will impress anyone"],
        "steps": [
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
        ]
    }];

    beforeEach(function() {
        module('recipi');
        service = {
            getTags: function(){ return {then : function(fn){fn({data: tag_data})}} },
            getIngredients: function(){ return {then : function(fn){fn({data: ingredient_data})}} },
            getRecipe: function(i){ return {then : function(fn){fn({data:recipe_data[i]})}} },
            getSteps: function(i){ return {then : function(fn){fn({data:step_data[i]})}} },
            postStep: function(i, s){ return {then : function(fn){fn({data:s})}} },
            tagRecipe: function(i, t){ return {then : function(fn){fn({data:recipe_data[i]})}} }
        };
    });

    describe('new recipe functionality', function() {

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('editRecipeController', {
                $scope: scope,
                $routeParams: {},
                recipeService: service
            }); //TODO
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should define recipe, tags, steps, tag, step and step_number on $scope', function() {
            expect(scope.recipe).toBeDefined();
            expect(scope.tags).toBeDefined();
            expect(scope.steps).toBeDefined();
            expect(scope.tag).toBeDefined();
            expect(scope.step).toBeDefined();
            expect(scope.step_number).toBe(1);
        });

        it('should put the tags and ingredients on the scope', function() {
            expect(scope.allTags.length).toBe(2);
            expect(scope.allIngredients.length).toBe(2);
        });

        it('should add tags correctly', function() {
            scope.tag = tag_data[1];
            scope.addTag();
            expect(scope.tags[0]).toBe(tag_data[1]);
        });

        it('should add steps correctly', function() {
            scope.step = recipe_data[1].steps[0];
            scope.addStep();
            expect(scope.steps[0]).toBe(recipe_data[1].steps[0]);
            expect(scope.step_number).toBe(2);
        });
    });

    describe('edit recipe functionality', function() {

        beforeEach(inject(function ($rootScope, $controller) {
            spyOn(service, 'getRecipe').and.callThrough();
            spyOn(service, 'getSteps').and.callThrough();
            scope = $rootScope.$new();
            controller = $controller('editRecipeController', {
                $scope: scope,
                $routeParams: {id:1},
                recipeService: service
            }); //TODO
        }));

        it('should try to get the right recipe', function() {
            expect(service.getRecipe).toHaveBeenCalledWith(1);
        });

        it('should set the current recipe', function() {
            expect(scope.recipe).toBeDefined();
            expect(scope.recipe).toBe(recipe_data[1]);
        });

        it('should get the steps for the recipe', function() {
            expect(scope.steps).toBeDefined();
            expect(scope.steps).toBe(recipe_data[1].steps);
        });

        it('should set a new step number correctly', function() {
            expect(scope.step_number).toBe(4);
        });
    });
});