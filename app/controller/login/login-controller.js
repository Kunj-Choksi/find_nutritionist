app.controller('loginController', ['$scope', '$http', 'Data', function($scope, $http, Data){

    //var locationVal = "";
    $scope.location = ['Mumbai', 'Navi Mumbai', 'Pune']
    
    $scope.suggetion = [
        {
            id: 1,
            name: "Dentist"
        }, {
            id: 2,
            name: "Gynecologist"
        }, {
            id: 3,
            name: "Dermatologist"
        }, {
            id: 4,
            name: "Ayurved"
        }
    ]

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
                    console.log(resp)
                    $scope.locationValue = resp.data.name;
                    window.localStorage.location = resp.data.name
                    $scope.suggationTab = true;
                }, function (error) {
                    console.log(error)
                })
            })
        }
    }

    $scope.setValue = function (loc) {
        $scope.locationValue = loc; 
        $scope.locationTab = false;
        $scope.suggationTab = true;
        Data.setValue(loc);
    }

    $scope.setDetails = function (name) {
        // setting location and search value
        $scope.suggationTab = false;
        $scope.locationValue = "";
        Data.setDetails(name);
    }

    $scope.init = function(){
        $scope.loginBox=true;
        $scope.locationValue = window.localStorage.location != null ? window.localStorage.location : "" 
    }

    $scope.openLoginPopUp = function(){
        console.log($scope.loginPopup);
        
    };

    $scope.init();

    
}])