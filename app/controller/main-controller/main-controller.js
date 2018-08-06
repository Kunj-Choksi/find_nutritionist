app.controller('mainCtrl', ['$scope', 'Data', '$state', '$http', '$rootScope', function ($scope, Data, $state, $http, $rootScope) {

    $scope.cities = [];
    $scope.specialities = [];
    $scope.query = {};
    $scope.query.cityId = '';
    $scope.query.cityName = '';
    $scope.query.q = '';
    $scope.query.specialityId = ''
    $scope.nutritionist = '';
    $scope.speciality = false;
    $scope.nutritionistName = false;
    $scope.locationTab = false;
    $scope.suggationTab = false;
    $scope.showOtherlisttab = false;
    $rootScope.specialities = [];

    $scope.init = function () {
        Data.retrieveCities(function (result) {
            $scope.cities = result.contents;
            $rootScope.cities = result.contents;
        }, function (error) {
            alert(error);
        });

        Data.retriveSpecilities(function (result) {
            $scope.specialities = result.contents;
            $rootScope.specialities = result.contents;
        }, function (error) {
            alert(error)
        })
    };
         
    $scope.init();

}])