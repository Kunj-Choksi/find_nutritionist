app.controller('nutritionistListCtrl', ['$scope', '$stateParams', 'Data', '$state', '$rootScope', function ($scope, $stateParams, Data, $state, $rootScope) {
    $scope.noDatafound = false;
    $scope.loaded = false;

    $scope.query.citi_id = window.localStorage.citi_id;
    $scope.query.speciality_id = window.localStorage.speciality_id;
    $scope.query.q = window.localStorage.q;

    $scope.goToprofile = function (n) {
        $state.go('nutritionist-view', { id: n.id })
    }

    $scope.init = function () {
        $scope.searchData();
    };

    $scope.searchData = function () {
        Data.searchData($scope.query.citi_id, $scope.query.speciality_id, $scope.query.q, function (result) {
            if (result.contents.nutritionists.length == 0) {
                $scope.query.cityName = findCity($scope.query.citi_id);
                $scope.query.q = findSpeciality($scope.query.speciality_id);
                $scope.noDatafound = true;
                $scope.loaded = true;
            } else {
                $scope.nutritionist = result.contents;
                $scope.length = result.contents.nutritionists.length;
                $scope.cityName = (window.localStorage.citi_id) ? result.contents.nutritionists[0].city.name : 'Near By';
                $scope.query.cityName = findCity($scope.query.citi_id);
                $scope.query.q = findSpeciality($scope.query.speciality_id);
                $scope.nutritionist = result.contents.nutritionists;
                $scope.loaded = true;
            }
        }, function (error) {
            alert(error);
        });
    };

    $scope.init();

    function findSpeciality(id) {
        var specialities = $rootScope.specialities;
        var speaciality = "";
        for (var i = 0; i < specialities.length; i++) {
            if (id == specialities[i].id) {
                speaciality = specialities[i].name;
                break
            }
        }
        return speaciality;
    }

    function findCity(id) {
        var cities = $rootScope.cities;
        var city = "";
        for (var i = 0; i < cities.length; i++) {
            if (id == cities[i].id) {
                city = cities[i].name;
                break
            }
        }
        return city;
    }
}])