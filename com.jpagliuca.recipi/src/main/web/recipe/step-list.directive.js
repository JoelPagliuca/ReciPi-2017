'use strict';

angular.module('recipi')

    .directive('stepList', stepList);

function stepList() {
    return {
        templateURL: "step-list.html",
        scope: false
    };
}