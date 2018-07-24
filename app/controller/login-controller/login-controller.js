app.controller('loginController', ['$scope', '$http', 'Data', '$state', function ($scope, $http, Data, $state) {

    $scope.state = $state.current.name == "home" ? false : true;
    
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
                    window.localStorage.location = resp.data.name
                    $scope.suggationTab = true;
                }, function (error) {
                    console.log(error)
                })
            })
        }
    }

    $scope.init = function () {
        $scope.loginBox = true;
        $scope.locationValue = window.localStorage.location != null ? window.localStorage.location : ""
    }

    $scope.openLoginPopUp = function () {
        console.log($scope.loginPopup);

    };

    $scope.init();


}])