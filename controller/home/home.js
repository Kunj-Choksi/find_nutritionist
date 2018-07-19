app.controller('homeController',['$scope','$http','Data', function ($scope, $http, Data) {

    $scope.showOtherlisttab = false;

    $scope.populerlist = ['Dermatologist', 'Pediatrician', 'Gynecologist/Obstetrician']

    $scope.openOtherlisttab = function(){
        $scope.showOtherlisttab = ($scope.showOtherlisttab == true) ? false : true;
    }

    $scope.setDetails = function(name){
        $scope.suggationTab = false;
        $scope.locationValue = "";
        Data.setDetails(name);
    }

}]) 
