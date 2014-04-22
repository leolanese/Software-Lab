// V <-$scope-> C
window.angular.module('myLabApp.controllers', [
    'ngRoute',
    'ngResource'
])

    .controller('LabelCtrl', ['$scope', function ($scope) {
        "use strict";

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

    // to encapsulate functionality
    .factory('loginService', ['$location', function($location){
        "use strict";

        return {

            login: function(){
                if ($scope.loginUser.username === 'leo') {
                    window.console.log('WELCOME!');
                    $location.path('/welcome');
                } else {
                    window.console.log('wrong username!');
                    $location.path('/intro');

                }
            }

        };

    }])

    .controller('LoginCtrl', ['$scope', 'labAPIservice', 'loginService', function ($scope, labAPIservice, loginService) {
        "use strict";

        $scope.t6 = "Blog";
        $scope.t7 = "Twitter";
        $scope.t8 = "e-mail";
        $scope.t9 = "Log-in";
        $scope.t91  = "Sign-in";
        $scope.t10  = "About me...";
        $scope.t11  = "What do I do";

        $scope.loginUser = { username: "", password: "" };

        $scope.loginNow = function(){
            // redirecting user using router ($location) and services (JSONP)

            $scope.usersList = [];

            labAPIservice.getDrivers().success(function (response) {
                //Digging into the response to get the relevant data
                $scope.usersList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                window.console.log(response.MRData);
                //(response.MRData.limit === '30' )? console.log('YAY') : $location.path('/intro') ;
                loginService.login($scope);
            });
        };

    }])

    .controller('moreAboutMeCtrl', ['$scope', function ($scope) {
        "use strict";

        $scope.t11 = "I am a front-end developer mobile web strategist and am located in London, UK. I am a passion developer how enjoy create a better code for a better world and improve experiences to look and work beautifully across any environment that can access the web.";
        $scope.t12 = "Login";
        $scope.t15 = "Contact me";
        $scope.t16 = "Coding a better code for a better world";

    }])

    // define the controllers
    .controller('MainCtrl', ['$scope', function ($scope) {
        "use strict";

        $scope.skill1 = 'javascript';
        $scope.skill2 = 'HTML5';
        $scope.skill3 = 'CSS3';
        $scope.skill4 = 'RWD';
        $scope.skill5 = 'MVC';
        $scope.skill6 = 'TDD/BDD';

    }])

    .controller('titleCtrl', ['$scope', function ($scope) {
        "use strict";

        $scope.t0 = "Lab - Leo Lanese";

    }])

    .controller('hoverCtrl', ['$scope', function ($scope) {
        "use strict";

        $scope.title = "Can't touch this!";

    }])

    .controller('welcome', ['$scope', function ($scope) {
        "use strict";

        $scope.t11  = "Welcome";
        $scope.t12 = "Page";

    }])

    .controller('validPassword', ['$scope', function ($scope) {
        "use strict";

        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue, $scope) {
                    var noMatch = viewValue !== scope.myForm.password.$viewValue;
                    ctrl.$setValidity('noMatch', !noMatch);
                });
            }
        };
    }]);