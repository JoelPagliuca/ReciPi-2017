'use strict';

describe('controllers', function() {

    beforeEach(function() {
        module('controllers');
    });

    describe('recipeListController', function() {

        var $scope;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('recipeListController as rl', {
                $scope: $scope,
                recipeService: { getRecipes: function(){ return [{},{},{},{}] } }
            });
        }));

        it('should have an accurate item count', function() {
            expect($scope.recipesCount).toBe(4);
        });
    });

    describe('getIngredientList', function() {

        var test_steps = [
            { ingredient: 'a', unit:'x', amount:1 },
            { ingredient: 'b', unit:'y', amount:2 },
            { ingredient: 'c', unit:'x', amount:3 }
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

        it('should get the amounrs correctly', function() {
            var data = getIngredientList(test_steps);
            expect(data.amount['a']).toBe(1);
            expect(data.amount['b']).toBe(2);
            expect(data.amount['c']).toBe(3);
        });

        it('should calculate the amount correctly', function() {
            test_steps[2].ingredient = 'a';
            var data = getIngredientList(test_steps);
            expect(data.amount['a']).toBe(4);
            test_steps[2].ingredient = 'c'; // undo
        });

    });

    describe('homeController', function() {

        var $scope;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('homeController as h', {
                $scope: $scope,
                recipeService: { getRecipes: function(){ return [{},{},{},{}] } }
            });
        }));

        it('should have an accurate item count', function() {
            expect($scope.recipesCount).toBe(4);
        });

        // TODO: mock Math.random
        it('should have a valid random recipe_id', function() {
            expect($scope.recipe_id).toEqual(jasmine.any(Number));
            expect($scope.recipe_id).toBeLessThan($scope.recipesCount);
        })
    });

});