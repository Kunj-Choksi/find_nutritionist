app.controller('homeCtrl',['$scope','$http','Data', function ($scope, $http, Data) {
    $scope.cities = [];
    $scope.speclilities = [];
    $scope.locationTab = false;
    $scope.query = {};
    $scope.query.cityId = '';
    $scope.query.cityName = '';
    $scope.query.q = '';
    $scope.query.specialityId = '';


    $scope.init = function () {
        Data.retrieveCities(function (result) {
            console.log(result);
            $scope.cities = result.contents;

        }, function (error) {
            alert(error);
        });
    };

    $scope.setCity = function (city) {
        $scope.locationTab = false;
        $scope.query.cityId = city.id;
        $scope.query.cityName = city.name;
    };

    $scope.setSpeciality = function (s) {
        $scope.locationTab = false;
        $scope.query.specialityId = s.id;
        $scope.query.q = s.name;
        $scope.searchData();
    };

    $scope.searchData = function () {


        Data.searchData($scope.query.cityId, $scope.query.specialityId, (($scope.query.specialityId) ? '' : $scope.query.q), function (result) {
            console.log(result);

        }, function (error) {
            alert(error);
        });
    };

    /*$scope.showOtherlisttab = false;

    $scope.populerlist = ['Dermatologist', 'Pediatrician', 'Gynecologist/Obstetrician']

    $scope.openOtherlisttab = function(){
        $scope.showOtherlisttab = ($scope.showOtherlisttab == true) ? false : true;
    };

    $scope.setDetails = function(name){
        $scope.suggationTab = false;
        $scope.locationValue = "";
        Data.setDetails(name);
    }*/

    $scope.init();

}]);
