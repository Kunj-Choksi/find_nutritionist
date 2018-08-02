app.controller('nutritionistViewCtrl', ['$scope', 'Data', '$stateParams', '$state', function ($scope, Data, $stateParams, $state) {

    $scope.loaded = false;

    $scope.nutritionist_id = $stateParams.id
    if ($scope.nutritionist_id == '') {
        $state.go('nutritionist-list')
    }

    $scope.intit = function () {
        Data.retriveNutritionistprofile($scope.nutritionist_id, function (result) {
            $scope.nutritionist = result.contents;
            $scope.loaded = true;
            console.log($scope.nutritionist)
        }, function (error) {
            alert(error)
        })
    }

    $scope.getSpecialities = function () {
        var str = '';
        $scope.nutritionist.specialities.forEach(function (value) {
            if (str == '') {
                str = value.name + ','
            }
            else if (str != '') {
                str = str + " " + value.name + ",";
            }
        })
        return str
    }

    $scope.intit();
}])