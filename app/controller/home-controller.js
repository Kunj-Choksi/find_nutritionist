app.controller('homeCtrl', ['$scope', '$http', 'Data', '$state', function ($scope, $http, Data, $state) {
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

    $scope.setCity = function (city) {
        $scope.locationTab = false;
        $scope.query.cityId = city.id;
        $scope.query.cityName = city.name;
    };
    
    $scope.goTodetails = function (s) {
        window.localStorage.citi_id = $scope.query.cityId;
        window.localStorage.speciality_id = (s.id) ? s.id : "";
        window.localStorage.q = $scope.query.q;
        if ($state.current.name == "nutritionist-list"){
            Data.searchData(window.localStorage.citi_id, window.localStorage.speciality_id, window.localStorage.q, function(result){
                $scope.nutritionist = result.contents;
            }, function(error){
                alert(error);
            })
        }
        else{
            $state.go('nutritionist-list');
        }
    };

    $scope.init();

}]);
