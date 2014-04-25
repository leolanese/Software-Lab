// setter $templateCache
// define the namespace and Router (SPA)
window.angular.module('myLabApp', [
    'ngRoute',
    'ngResource',
    'myLabApp.services',
    'myLabApp.controllers'
]).
    config(['$routeProvider', function($routeProvider) {
        "use strict";

        $routeProvider.when(
            '/intro', {
                templateUrl: 'partials/intro.html',
                controller: 'moreAboutMeCtrl'
            });

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
            '/aboutme', {
                templateUrl: 'partials/aboutme.html',
                controller: 'moreAboutMeCtrl'
        });

        $routeProvider.when(
            '/login', {
                templateUrl: 'partials/login.html',
                controller: 'validPassword'
        });

        $routeProvider.when(
            '/signin', {
                templateUrl: 'partials/signin.html',
                controller: 'validPassword'
        });

        $routeProvider.otherwise({
            redirectTo: 'intro'}
           );

        }]);

// getter
var myTestApp = window.angular.module('myLabApp');
