'use strict';

describe('controllers', function() {

    describe('Recipe list', function() {
        it('should have an accurate item count', function() {
            var scope = {};
            var service = { data: [{},{},{}] };
            var controller = new recipeListController(scope, service);
            expect(scope.recipeCount).toBe(4);
        });
    });

});