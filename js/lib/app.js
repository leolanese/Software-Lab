// setter $templateCache
// define the namespace and Router (SPA)
angular.module('myLabApp', [
    'ngRoute',
    'ngResource',
    'myLabApp.services',
    'myLabApp.controllers'
]).
    config(['$routeProvider', function($routeProvider) {
        "use strict";
        $routeProvider.when(
            '/skills', {
            templateUrl: 'partials/skills.html',
            controller: 'MainCtrl'
        });

        $routeProvider.when(
            '/welcome', {
                templateUrl: 'partials/welcome.html',
                controller: 'MainCtrl'
            });

        $routeProvider.when(
            '/contactme', {
                templateUrl: 'partials/contactme.html',
                controller: 'moreAboutMeCtrl'
            });

        $routeProvider.when(
            '/aboutme', {
                templateUrl: 'partials/aboutme.html',
                controller: 'moreAboutMeCtrl'
            });


    }]);

// getter
var myTestApp = angular.module('myLabApp');


$(window).resize(function(){
    "use strict";

    $('#imageSize').text($('.featurette img').attr('src'));
    $('#bgImageSize').text($('.bg-img').css('background-image'));

});

$(window).resize();


