'use strict';

describe('recipeController', function() {

    beforeEach(function() {
        module('controllers');
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

        it('should get the amounrs correctly', function() {
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

});