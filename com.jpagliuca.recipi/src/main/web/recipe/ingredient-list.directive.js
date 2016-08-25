'use strict';

angular.module('directives')

    .directive('ingredientList', ingredientList);

function ingredientList() {
    return {
        restrict: 'E',
        templateUrl: "recipe/ingredient-list.html"
    };
}