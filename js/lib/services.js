'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myLabApp.services', [])

    .factory('labAPIservice', function($http) {

        var labAPI = {};

            labAPI.getDrivers = function() {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
            });
        };

        return labAPI;
    });


