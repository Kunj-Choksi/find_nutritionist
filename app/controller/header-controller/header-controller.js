app.controller('headerCtrl', ['$scope', '$http', 'Data', '$state', function ($scope, $http, Data, $state) {

    $scope.showSearchbar = $state.current.name == "home" ? false : true;

    $scope.init = function () {
        $scope.loginBox = true;
        $scope.locationValue = window.localStorage.location != null ? window.localStorage.location : ""
    }

    $scope.openLoginPopUp = function () {
        console.log($scope.loginPopup);

    };

    $scope.init();


}])