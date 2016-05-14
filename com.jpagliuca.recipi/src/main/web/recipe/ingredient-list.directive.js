'use strict';

angular.module('recipi')

    .directive('ingredientList', ingredientList);

function ingredientList() {
    return {
        templateUrl: "recipe/ingredient-list.html"
    };
}