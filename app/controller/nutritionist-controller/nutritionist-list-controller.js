app.controller('nutritionistListCtrl', ['$scope', '$stateParams', 'Data', '$state', function ($scope, $stateParams, Data, $state) {

    $scope.query = {};
    $scope.query.cityId = '';
    $scope.query.specialityId = '';
    $scope.query.q = '';
    $scope.nutritionist = [];
    $scope.noDatafound = false;


    $scope.query.citi_id = window.localStorage.citi_id;
    $scope.query.speciality_id = window.localStorage.speciality_id;
    $scope.query.q = window.localStorage.q;

    $scope.goToprofile = function (n) {
        $state.go('nutritionist-view', { id: n.id })
    }

    $scope.init = function () {
        Data.searchData($scope.query.citi_id, $scope.query.speciality_id, $scope.query.q, function (result) {
            if (result.contents.nutritionists.length == 0) {
                $scope.noDatafound = true;
            }else{
                $scope.length = result.contents.nutritionists.length;
                $scope.cityName = result.contents.nutritionists[0].city.name;
                $scope.nutritionist = result.contents.nutritionists;
            }
        }, function (error) {
            alert(error);
        });
    };

    $scope.init();
}])