angular.module("app").factory("githubAPI", function ($http) {
    var _searchRepositories = function (url) {
        return $http.get(url);
    }

    return {
        searchRepositories: _searchRepositories
    }
});