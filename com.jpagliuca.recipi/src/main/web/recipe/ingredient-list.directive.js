'use strict';

angular.module('recipi')

    .directive('ingredientList', ingredientList);

function ingredientList() {
    return {
        restrict: 'E',
        templateUrl: "recipe/ingredient-list.html"
    };
}