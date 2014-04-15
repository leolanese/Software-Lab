// setter
// define the namespace and Router (SPA)
var myLabApp = angular.module('myLabApp', [
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
    "use strict";

    $routeProvider.when(
        '/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
    });

    $routeProvider.when(
        '/index', {
            templateUrl: 'partials/intro.html',
            controller: ['MainCtrl', 'LabelCtrl', 'FooterCtrl']
        });

    $routeProvider.otherwise({
        redirectTo: 'partials/intro.html'});

}]);


myLabApp.controller('LoginCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.t9 = "Login";

}]);


// define the controllers
myLabApp.controller('MainCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.skill1 = 'javascript';
    $scope.skill2 = 'HTML5';
    $scope.skill3 = 'CSS3';
    $scope.skill4 = 'RWD';
    $scope.skill5 = 'MVC';
    $scope.skill6 = 'TDD/BDD';

}]);

myLabApp.controller('LabelCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.name = "I'm Leo.";
    $scope.jobTitle = "I'm a Front-end Developer";
    $scope.workLocation = "I'm in London, UK";

}]);

myLabApp.controller('FooterCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.t6 = "Blog";
    $scope.t7 = "Twitter";
    $scope.t8 = "e-mail";
    $scope.t9 = "ON";
    $scope.t10 = "OFF";

}]);



// getter
var myTestApp = angular.module('myLabApp');

setInterval(window.drawCircle, 2);

$(window).resize(function(){
    "use strict";

    $('#imageSize').text($('.featurette img').attr('src'));
    $('#bgImageSize').text($('.bg-img').css('background-image'));
});
$(window).resize();