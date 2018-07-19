app.controller('showSearchedval', function ($scope) {

    $scope.state = true; //to hide/show searchbar in searchdetails page
    
    $scope.getValues = function () {
        $scope.searchValue = window.localStorage.name;
        $scope.searchedLoc = window.localStorage.location;
    }

})