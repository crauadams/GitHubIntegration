angular.module("app").config(function ($routeProvider) {
    $routeProvider.when("/search", {
        templateUrl: "app/views/search.html",
        controller: "appCtrl"
    });
    $routeProvider.when("/detail", {
        templateUrl: "app/views/detail.html",
        controller: "detailCtrl"
    });
    $routeProvider.otherwise({ redirectTo: "/search" });
});