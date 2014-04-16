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
            '/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        });

        $routeProvider.when(
            '/intro', {
            templateUrl: 'partials/intro.html',
            controller: 'moreAboutMe'
            });

        $routeProvider.when(
            '/welcome', {
                templateUrl: 'partials/welcome.html',
                controller: 'moreAboutMe'
            });

        $routeProvider.otherwise({
            redirectTo: 'partials/intro.html'});

    }]);

// getter
var myTestApp = angular.module('myLabApp');


$(window).resize(function(){
    "use strict";

    $('#imageSize').text($('.featurette img').attr('src'));
    $('#bgImageSize').text($('.bg-img').css('background-image'));

});

$(window).resize();


