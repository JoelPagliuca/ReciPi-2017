'use strict';

angular.module('recipi')

    .directive('tagList', tagList);

function tagList() {
    return {
        restrict: 'E',
        templateUrl: "recipe/tag-list.html"
    };
}