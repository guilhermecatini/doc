var app = angular.module("myApp", []);

app.controller("myController", function ($scope, $http) {
    
    $http({
        method: "GET",
        url: "data.json"
    }).then(function(response) {
        $scope.data = response.data.result;
    });


});