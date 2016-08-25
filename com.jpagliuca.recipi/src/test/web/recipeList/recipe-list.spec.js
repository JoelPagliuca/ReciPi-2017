'use strict';

describe('recipeListController', function() {

    var $scope;

    beforeEach(function() {
        module('controllers');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        var recipe_data = [{},{},{},{}];
        $scope = $rootScope.$new();
        $controller('recipeListController as rl', {
            $scope: $scope,
            recipeService: { getRecipes: function(s,e){ s(recipe_data); e({}) } }
        });
    }));

    it('should have an accurate item count', function() {
        expect($scope.recipesCount).toBe(4);
    });
});