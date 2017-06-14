angular.module("app").controller("detailCtrl", function ($scope, $location, sharedPropertiesAPI) {
    $scope.goToSearch = function () {
        $location.path("/search");
    }

    $scope.project = sharedPropertiesAPI.project;

});