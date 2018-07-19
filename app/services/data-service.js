app.factory('Data', ['$http',function ($http) {

    var s = {};
    s.baseUrl = "http://localhost:3000/nutritionist_search_api/";

    s.postHttp = function (url, params, successCb, failureCb) {
        s.getAuthData(params);
        $http.post(s.baseUrl + url, params).then(function (result) {
            if (result.data.status == 'error') {
                failureCb(result.data.message);

            } else if (result.data.status == 'success') {
                successCb(result.data);

            } else {
                failureCb("Something is wrong.");
            }

        }, function (error) {
            failureCb(error);
        });
    };

    s.getAuthData = function (params) {
        return params;
    };

    s.retrieveCities = function (successCb, failureCb) {
        s.postHttp('masters/retrieve_cities', {}, successCb, failureCb);
    };

    /*s.postHttp = function(url, data, successCb, failurCb){
        $http.post().then()
    };

    s.setValue = function (loc) {
        locationVal = loc   
    };

    s.setDetails = function (name) {
        window.localStorage.location = locationVal == "" ? window.localStorage.location : locationVal
        window.localStorage.name = name;
    };

    s.getLocationval = function(searchVal){
        s.postHttp('', searchVal, successCb, failurCb);
    };

    s.getNutritionist = function(locationVal, nutritionistValue, specialityValue){
        var data = {}
        s.postHttp() 
    };*/

    return s;

}]);