app.controller('mainCtrl', ['$scope', 'Data', '$state', '$http', function ($scope, Data, $state, $http) {

    $scope.cities = [];
    $scope.speclilities = [];
    $scope.query = {};
    $scope.query.cityId = '';
    $scope.query.cityName = '';
    $scope.query.q = '';
    $scope.query.specialityId = '';
    $scope.nutritionist = '';
    $scope.speciality = false;
    $scope.nutritionistName = false;
    $scope.locationTab = false;
    $scope.suggationTab = false;
    $scope.showOtherlisttab = false;

    $scope.init = function () {
        Data.retrieveCities(function (result) {
            $scope.cities = result.contents;
        }, function (error) {
            alert(error);
        });

        Data.retriveSpecilities(function (result) {
            $scope.speclilities = result.contents
        }, function (error) {
            alert(error)
        })
    };

    

    $scope.toggleSuggationmenu = function (event) {
        $scope.locationTab = false;
        $scope.suggationTab = !($scope.suggationTab);
        event.stopPropagation();
    }

    $scope.toggleLocationmenu = function (event) {
        $scope.suggationTab = false;
        $scope.locationTab = !($scope.locationTab);
        event.stopPropagation();
    }

    window.onclick = function () {
        if ($scope.suggationTab || $scope.locationTab) {
            $scope.suggationTab = false;
            $scope.locationTab = false;
            $scope.$apply();
        }
    }

    $scope.init();

}])