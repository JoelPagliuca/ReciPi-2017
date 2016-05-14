'use strict';

angular.module('recipi')

    .directive('newFooter', footer);

function footer() {
    return {
        restrict: 'E',
        templateUrl: "common/footer/footer.html"
    };
}