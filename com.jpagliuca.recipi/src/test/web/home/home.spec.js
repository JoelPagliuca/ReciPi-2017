'use strict';

describe('homeController', function() {

    var scope, controller, service;

    beforeEach(function() {
        angular.mock.module('recipi');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        var recipe_data = [{},{},{},{}];
        scope = $rootScope.$new();
        controller = $controller('homeController', {
            $scope: scope,
            recipeService: { 
                getRecipes: function() {
                    return { then: function(fn) {fn({data:recipe_data})} }
                }
            }
        });
    }));

    it('should define recipesCount', function() {
        expect(scope.recipesCount).toBeDefined();
    });

    it('should have an accurate item count', function() {
        expect(scope.recipesCount).toBe(4);
    });

    // TODO: mock Math.random
    it('should have a valid random recipe_id', function() {
        expect(scope.recipe_id).toEqual(jasmine.any(Number));
        expect(scope.recipe_id).toBeLessThan(scope.recipesCount);
    })
});