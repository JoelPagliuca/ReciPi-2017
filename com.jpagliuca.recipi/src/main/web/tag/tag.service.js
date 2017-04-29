'use strict';

angular.module('recipi').service('tagService', tagService);

tagService.$inject = ['$http', 'API'];

/**
 * interface with the Tag API
 * @param {*} http does the http calls
 * @param {*} API API URL
 */
function tagService($http, API) {

    var self = this;

    self.getTags = function() {
        return $http.get(API+'/tags/');
    }

    self.getTag = function(id) {
        return $http.get(API+'/tags/'+id+'/');
    }

    self.delete = function(id) {
        return $http.delete(API+'/tags/'+id+'/');
    }

    self.create = function(tag) {
        return $http.post(API+'/tags/', tag);
    }
}