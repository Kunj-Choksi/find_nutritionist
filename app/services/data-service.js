app.factory('Data', ['$http', function ($http) {

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

    s.retriveSpecilities = function (successCb, failureCb) {
        s.postHttp('masters/retrieve_specialities', {}, successCb, failureCb);
    }

    s.searchData = function (city_id, speciality_id, q, successCb, failureCb) {
        var data = { city_id: city_id, speciality_id: speciality_id, q: q };
        s.postHttp('search/retrieve_nutritionist', data, successCb, failureCb);
    }

    s.retriveNutritionistprofile = function (id, successCb, failureCb) {
        var data = { id: id }
        s.postHttp('nutritionist_profile/retrieve_nutritionist_profile', data, successCb, failureCb);
    }

    return s;

}]);