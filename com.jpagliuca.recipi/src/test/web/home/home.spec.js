'use strict';

describe('homeController', function() {

    var $scope;

    beforeEach(function() {
        module('controllers');
    });

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