angular.module('githubProxy').service('commitsService', function ($http) {

    this.search = function(value){
        return $http.get('/api/commits?q=' + value).then(function (response) {
            return response.data;
        });
    }

  /*  this.get = function(value1, value2){
        return $http.get('/api/commit?r=' + value1 + '&s=' + value2).then(function (response) {
            return response.data;
        });
    }*/

});