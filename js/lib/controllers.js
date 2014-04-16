"use strict";

// V <-$scope-> C
angular.module('myLabApp.controllers', [
    'ngRoute',
    'ngResource'
])

    .controller('LabelCtrl', ['$scope', function ($scope) {
        // scope hack
        window.scope = $scope;
        // scope.jobTitle = "none"
        // scope.$apply()

        $scope.name = "I'm Leo.";
        $scope.jobTitle = "I'm a Front-end Developer";
        $scope.workLocation = "I'm in London, UK";

        // draw the circles
        setInterval(window.drawCircle,0);

    }])


    // to encapsute functionalities
    .factory('loginService', ['$location', function($location){

        return {

            login: function(){
                if ($scope.loginUser.username === 'leo') {
                    console.log('WELCOME!');
                    $location.path('/welcome');
                } else {
                    console.log('wrong username!');
                    $location.path('/intro');

                }
            }

        };

    }])


    .controller('LoginCtrl', ['$scope', 'labAPIservice', 'loginService', function ($scope, labAPIservice, loginService) {

        $scope.t6 = "Blog";
        $scope.t7 = "Twitter";
        $scope.t8 = "e-mail";

        $scope.t9 = "Login";
        $scope.t10  = "More about me...";
        $scope.t11  = "What do I do";

        $scope.loginUser = { username: "", password: "" };


        $scope.loginNow = function(){
            // redirecting user using router ($location) and services (JSONP)

            $scope.usersList = [];

            labAPIservice.getDrivers().success(function (response) {
                //Digging into the response to get the relevant data
                $scope.usersList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                console.log(response.MRData);
                //(response.MRData.limit === '30' )? console.log('YAY') : $location.path('/intro') ;
                loginService.login($scope);
            });
        };

    }])


    .controller('moreAboutMeCtrl', ['$scope', function ($scope) {

        $scope.t11 = "I am a front-end developer mobile web strategist and am located in London, UK. I am a passion developer how enjoy create a better code for a better world and improve experiences to look and work beautifully across any environment that can access the web.";
        $scope.t12 = "Login";
        $scope.t15 = "Contact me";
        $scope.t16 = "Coding a better code for a better world";

    }])


    // define the controllers
    .controller('MainCtrl', ['$scope', function ($scope) {

        $scope.skill1 = 'javascript';
        $scope.skill2 = 'HTML5';
        $scope.skill3 = 'CSS3';
        $scope.skill4 = 'RWD';
        $scope.skill5 = 'MVC';
        $scope.skill6 = 'TDD/BDD';

    }])



    .controller('titleCtrl', ['$scope', function ($scope) {

        $scope.t0 = "Lab - Leo Lanese";

    }])


    .controller('hoverCtrl', ['$scope', function ($scope) {

        $scope.title = "Can't touch this!";

    }])

    .controller('welcome', ['$scope', function ($scope) {


        $scope.t11  = "Welcome";
        $scope.t12 = "Page";

    }])


    // add behaviour on rollover
    .directive('showMessageWhenHovered', [function (){

        return {
            // don't monkey DOM !
            // use jqLite if possible

            restrict: "A",  // A = Attribute, C = CLass, E = element,  M = HTML comment
            link: function(scope, element, attributes) {

                var originalMessage = scope.title;

                element.bind("mouseover", function(){
                    scope.message = attributes.message;
                    window.console.warn(scope.message);
                });

                element.bind("mouseout", function(){
                    scope.message = originalMessage;
                    window.console.warn(scope.message);
                });

            }
        };

    }]);
