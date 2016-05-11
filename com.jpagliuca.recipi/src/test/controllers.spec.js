'use strict';

describe('controllers', function() {

    beforeEach(function() {
        module('recipi');
    });

    describe('recipeListController', function() {

        var $scope;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('recipeListController as rl', {
                $scope: $scope,
                recipeService: { getRecipes: function(){ return [{},{},{}] } }
            });
        }));

        it('should have an accurate item count', function() {
            expect($scope.recipesCount).toBe(3);
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

        it('should calculate the amount correctly', function() {
            test_steps[2].ingredient = 'a';
            var data = getIngredientList(test_steps);
            expect(data.amount['a']).toBe(4);
        });

    });

});