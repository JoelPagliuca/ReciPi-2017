'use strict';

angular.module('recipi').controller('tagCtrl', tagCtrl);

tagCtrl.$inject = ['$scope', 'tagService', 'notifications'];

/**
 * CRUD ops for tag
 * @param $scope
 * @param tagService
 */
function tagCtrl ($scope, tagService, notifications) {
    $scope.tags = [];
    // get all the tags
    tagService.getTags().then(function(response) {
        $scope.tags = response.data;
    });

    // delete function
    $scope.delete = function(target) {
        var val = confirm("are you sure you want to delete this tag?");
        if (val == true) {
            tagService.delete(target).then(function(data) {
                notifications.showSuccess('tag deleted');
                for (var i = 0; i < $scope.tags.length; i++) {
                    if ($scope.tags[i].id == target) {
                        $scope.tags.splice(i, 1);
                    }
                }
            });
        }
    };

    $scope.newTag = {};
    $scope.create = function() {
        tagService.create($scope.newTag).then(function(response) {
            $scope.tags.push($scope.newTag);
            $scope.newTag = {};
            notifications.showSuccess('tag added');
        })
    }
}