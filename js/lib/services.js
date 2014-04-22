// Demonstrate how to register services
// In this case it is a simple value service.
window.angular.module('myLabApp.services', [])

    .factory('labAPIservice', function($http) {
        "use strict";

        var labAPI = {};

            labAPI.getDrivers = function() {
            return $http({
                method: 'JSONP',
                url: 'http://www.leolanese.com/lab/json/lab.json?callback=JSON_CALLBACK'
            });
        };

        return labAPI;
    });