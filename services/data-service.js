app.factory('Data', ['$http',function ($http) {

    var s = {};

    var locationVal = "";

    s.postHttp = function(url, data, successCb, failurCb){
        $http.post().then()
    }

    s.setValue = function (loc) {
        locationVal = loc   
    }

    s.setDetails = function (name) {
        window.localStorage.location = locationVal == "" ? window.localStorage.location : locationVal
        window.localStorage.name = name;
    }

    s.getLocationval = function(searchVal){
        s.postHttp('', searchVal, successCb, failurCb);
    }

    s.getNutritionist = function(locationVal, nutritionistValue, specialityValue){
        var data = {}
        s.postHttp() 
    }

    return s;

}])