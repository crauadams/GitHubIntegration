angular.module("app").controller("appCtrl", function ($scope, githubAPI, sharedPropertiesAPI, config) {
    $scope.sortOptions = [
        { id: 1, sort: "", order: "", description: "Best match" },
        { id: 2, sort: "stars", order: "desc", description: "Most stars" },
        { id: 3, sort: "stars", order: "asc", description: "Fewest stars" },
        { id: 4, sort: "forks", order: "desc", description: "Most forks" },
        { id: 5, sort: "forks", order: "asc", description: "Fewest forks" },
        { id: 6, sort: "updated", order: "desc", description: "Recently updated" },
        { id: 7, sort: "updated", order: "asc", description: "Least recently updated" }
    ];

    $scope.selectProject = function (selectedProject) {
        sharedPropertiesAPI.project = selectedProject;
    }

    $scope.loadRepositories = function (criteria, sortOption) {
        var url = config.baseUrl + criteria;

        if (sortOption != undefined) {
            url =  url + "&sort=" + sortOption.sort + "&order=" + sortOption.order;
        }

        githubAPI.searchRepositories(url).success(function (data, status) {
            $scope.results = data;
        });
    }
});