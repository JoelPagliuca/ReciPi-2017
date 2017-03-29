'use strict';

describe('recipeListController', function() {

    var scope, controller;

    beforeEach(function() {
        module('recipi');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        var recipe_data = [{},{},{},{}];
        scope = $rootScope.$new();
        controller = $controller('recipeListController', {
            $scope: scope,
            recipeService: { getRecipes: function(){ return {success : function(fn){fn(recipe_data)}} }}
        });
    }));

    it('should have an accurate item count', function() {
        expect(scope.recipesCount).toBe(4);
    });
});