app.factory('Data', [function () {

    var s = {};

    var locationVal = "";

    s.setValue = function (loc) {
        locationVal = loc
        
    }

    s.setDetails = function (name) {
        window.localStorage.location = locationVal == "" ? window.localStorage.location : locationVal
        window.localStorage.name = name;
    }

    s.getLocationval = function(searchVal){
        s.postHttp = ('', searchVal, )
    }

    return s;

}])