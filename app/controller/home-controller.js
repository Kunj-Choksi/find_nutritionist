app.controller('homeCtrl', ['$scope', '$http', 'Data', '$state', function ($scope, $http, Data, $state) {

    $scope.openOtherlisttab = function () {
        $scope.showOtherlisttab = ($scope.showOtherlisttab == true) ? false : true;
    }
}]);
