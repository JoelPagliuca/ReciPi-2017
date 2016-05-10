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
                service: { data: [{},{},{}] }
            });
        }));

        it('should have an accurate item count', function() {
            expect($scope.recipesCount).toBe(3);
        });
    });

});