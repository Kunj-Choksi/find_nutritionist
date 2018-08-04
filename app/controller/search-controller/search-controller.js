app.controller('searchCtrl', ['$scope', 'Data', '$state', '$http', function ($scope, Data, $state, $http) {

    $scope.setCity = function (city) {
        $scope.locationTab = false;
        $scope.showOtherlisttab = false;
        $scope.query.cityId = city.id;
        $scope.query.cityName = city.name;
        $scope.suggationTab = true;
    };

    $scope.goTodetails = function (s) {
        window.localStorage.citi_id = $scope.query.cityId;
        window.localStorage.speciality_id = (s.id) ? s.id : "";
        window.localStorage.q = window.localStorage.speciality_id != "" ? "" : $scope.query.q;
        if ($state.current.name == "nutritionist-list") {
            Data.searchData(window.localStorage.citi_id, window.localStorage.speciality_id, window.localStorage.q, function (result) {
                $scope.nutritionist = result.contents;
                $scope.loaded = true;
            }, function (error) {
                alert(error);
            })
        }
        else {
            $state.go('nutritionist-list');
        }
    };

    $scope.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var long = position.coords.longitude;
                var lati = position.coords.latitude;
                var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lati + "&lon=" + long + "";
                $http({
                    method: 'GET',
                    url: url
                }).then(function (resp) {
                    $scope.locationValue = resp.data.name;
                    //window.localStorage. = resp.data.name
                    $scope.suggationTab = true;
                }, function (error) {
                    console.log(error)
                })
            })
        }
    }

}])