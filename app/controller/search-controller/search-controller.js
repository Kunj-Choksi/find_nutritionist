app.controller('searchCtrl', ['$scope', 'Data', '$state', '$http', '$rootScope', function ($scope, Data, $state, $http, $rootScope) {

    $scope.setCity = function (city) {
        $scope.locationTab = false;
        $scope.showOtherlisttab = false;
        $scope.query.cityId = city.id;
        $scope.query.cityName = city.name;
        $scope.suggationTab = true;
    };

    $scope.goTodetails = function (s) {
        window.localStorage.citi_id = ($scope.query.cityId) ? $scope.query.cityId : window.localStorage.citi_id;
        window.localStorage.speciality_id = (s.id) ? s.id : "";
        window.localStorage.q = window.localStorage.speciality_id != "" ? "" : $scope.query.q;
        if ($state.current.name == "nutritionist-list") {
            location.reload();
        } else {
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
                    $scope.setCity(findCityid(resp.data.name));
                    $scope.suggationTab = true;
                }, function (error) {
                    console.log(error)
                })
            })
        }
    }


    document.querySelector('#locInput').addEventListener('click', toggleLocationmenu, true);
    function toggleLocationmenu(event) {
        $scope.suggationTab = false;
        $scope.locationTab = !($scope.locationTab);
        event.stopPropagation();
    }

    document.querySelector('#suggInput').addEventListener('click', toggleSuggationmenu, true);
    function toggleSuggationmenu(event) {
        $scope.locationTab = false;
        $scope.suggationTab = !($scope.suggationTab);
        event.stopPropagation();
    }

    document.addEventListener('click', function (event) {
        if ($scope.locationTab == true || $scope.suggationTab == true) {
            $scope.suggationTab = false;
            $scope.locationTab = false;
        }

        $scope.$apply();
    })

    function findCityid(name) {
        var cities = $rootScope.cities;
        var city = [];
        for (var i = 0; i < cities.length; i++) {
            if (cities[i].name == name) {
                city = cities[i];
                break;
            }
        }
        return city;
    }
}])