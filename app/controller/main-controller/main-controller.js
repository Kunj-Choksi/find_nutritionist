app.controller('mainCtrl', ['$scope', 'Data', '$state', '$http', '$rootScope', function ($scope, Data, $state, $http, $rootScope) {

    $scope.cities = [];
    $scope.specialities = [];
    $scope.query = {};
    $scope.query.cityId = '';
    $scope.query.cityName = '';
    $scope.query.q = '';
    $scope.query.specialityId = ''
    $scope.nutritionist = '';
    $scope.speciality = false;
    $scope.nutritionistName = false;
    $scope.locationTab = false;
    $scope.suggationTab = false;
    $scope.showOtherlisttab = false;
    $rootScope.specialities = [];

    $scope.init = function () {
        Data.retrieveCities(function (result) {
            $scope.cities = result.contents;
            $rootScope.cities = result.contents;
        }, function (error) {
            alert(error);
        });

        Data.retriveSpecilities(function (result) {
            $scope.specialities = result.contents;
            $rootScope.specialities = result.contents;
        }, function (error) {
            alert(error)
        })
    };



    $scope.toggleSuggationmenu = function (event) {
        $scope.locationTab = false;
        $scope.suggationTab = !($scope.suggationTab);
        event.stopPropagation();
    }

    $scope.toggleLocationmenu = function (event) {
        $scope.suggationTab = false;
        $scope.locationTab = !($scope.locationTab);
        event.stopPropagation();
    }

    window.onclick = function () {
        if ($scope.suggationTab || $scope.locationTab) {
            $scope.suggationTab = false;
            $scope.locationTab = false;
            $scope.$apply();
        }
    } 

    $scope.init();

}])

/* app.directive("outsideClick", ['$document', '$parse', function($document, $parse) {
  return {
    link: function($scope, $element, $attributes) {
     
      var scopeExpression = $attributes.outsideClick,
        onDocumentClick = function(event) {
          
          // check for flag
          if(!$scope.closeFlag) {
            $scope.closeFlag = true;
            return;
          }
          
          
          var parent = event.target;

          while (parent && parent !== $element[0]) {
            parent = parent.parentNode;
          }

          if (!parent) {
            $scope.$apply(scopeExpression);
          }
        }

      $document.on("click", onDocumentClick);

      $element.on('$destroy', function() {
        $document.off("click", onDocumentClick);
      });
    }
  }
}]);
 */