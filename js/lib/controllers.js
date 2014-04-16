'use strict';

// V <-$scope-> C
angular.module('myLabApp.controllers', ['ngRoute','ngResource'])

    .controller('LabelCtrl', function ($scope) {
        // scope hack
        window.scope = $scope;
        // scope.jobTitle = "none"
        // scope.$apply()

        $scope.name = "I'm Leo.";
        $scope.jobTitle = "I'm a Front-end Developer";
        $scope.workLocation = "I'm in London, UK";
        // draw the circles
        setInterval(window.drawCircle,0);

    })

    .controller('LoginCtrl', function ($scope, $location, labAPIservice) {

        $scope.t9 = "Login";
        $scope.t10  = "More about me...";

        $scope.loginUser = { username: "", password: "" };


        $scope.loginNow = function(){
            // redirecting user using router ($location) and services (JSONP)

            $scope.usersList = [];

            labAPIservice.getDrivers().success(function (response) {
                //Digging into the response to get the relevant data
                $scope.usersList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                console.log(response.MRData);
                //(response.MRData.limit === '30' )? console.log('YAY') : $location.path('/intro') ;
                if ($scope.loginUser.username === 'leo') {
                    console.log('WELCOME!');
                    $location.path('/welcome')
                } else {
                    console.log('wrong username!');
                    $location.path('/intro');

                }
            });

        };



    })


    .controller('moreAboutMe', function ($scope) {


        $scope.t11  = "I'm a web developer";
        $scope.t12 = "Login";

    })


    // define the controllers
    .controller('MainCtrl', function ($scope) {

        $scope.skill1 = 'javascript';
        $scope.skill2 = 'HTML5';
        $scope.skill3 = 'CSS3';
        $scope.skill4 = 'RWD';
        $scope.skill5 = 'MVC';
        $scope.skill6 = 'TDD/BDD';

    })


    .controller('FooterCtrl', function ($scope) {

        $scope.t6 = "Blog";
        $scope.t7 = "Twitter";
        $scope.t8 = "e-mail";

    })

    .controller('titleCtrl', function ($scope) {

        $scope.t0 = "Lab - Leo Lanese";

    })


    .controller('hoverCtrl', function ($scope) {

        $scope.title = "Can't touch this!";

    })

    .controller('welcome', function ($scope) {


        $scope.t11  = "Welcome";
        $scope.t12 = "Page";

    })

    // add behaviour on rollover
    .directive('showMessageWhenHovered', function (){

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

    });
