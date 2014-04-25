"use strict";

// V <-$scope-> C
window.angular.module('myLabApp.controllers', [
    'ngRoute',
    'ngResource'
])

    .controller('AnimateCtrl', ['$scope', function ($scope) {

        var giveSize = function() {

            var myWidth, myHeight = 0;

            if( typeof( window.innerWidth ) === 'number' ) {
                //Non-IE
                myWidth = window.innerWidth;
                myHeight = window.innerHeight;
            } else if( document.documentElement && ( document.documentElement.clientWidth ||
                document.documentElement.clientHeight ) ) {
                //IE 6+ in 'standards compliant mode'
                myWidth = document.documentElement.clientWidth;
                myHeight = document.documentElement.clientHeight;
            }

            // return Object Lilteral
            return {
                'W': myWidth,
                'H': myHeight
            };

        };

        //Function to create circles with different positions and velocities
        var createCircle = function(){

            var result = giveSize(),
                W = result.W,
                H = result.H;

            // var W = window.innerWidth, H = window.innerHeight;

            //Random Position
            this.x = Math.random() * W;
            this.y = Math.random() * H;

            //Random Velocities
            this.vx = Math.random() * 1;
            this.vy = -this.vx;

            //Random Radius
            this.rad = 10 + Math.random() * 22;
        };


        var createCircles = function(idGetContext, grad, cir, W, H){

            //Draw the circle and it with the blur grad
            idGetContext.beginPath();
            idGetContext.globalCompositeOperation = "lighter"; // destination-out
            idGetContext.fillStyle = grad;
            idGetContext.arc(cir.x, cir.y, cir.rad, Math.PI*2, false); // draw the circle
            idGetContext.fill();

            // speed
            cir.x += cir.vx;
            cir.y += cir.vy;

            // circles stay within canvas
            if(cir.x <  -66){ cir.x = W+66;}
            if(cir.y <  -66){ cir.y = H+66;}
            if(cir.x > W+66){ cir.x =  -66;}
            if(cir.y > H+66){ cir.y =  -66;}

        };

        //Function to draw the background
        var drawCircle = function() {

            var canvasId = document.getElementById('canvas'),
                idGetContext = canvasId.getContext("2d"),
                result = giveSize(),
                W = result.W,
                H = result.H;

            canvasId.width = W;
            canvasId.height = H ;

            //Create the gradient
            var grad = idGetContext.createLinearGradient(0, 0, W, H);
            grad.addColorStop(0, 'blue');
            grad.addColorStop(1, '#ededed');

            /*
             console.log(result.W);
             console.log(result.H);
             */

            //Fill the canvas with gradient
            idGetContext.globalCompositeOperation = "darker"; //lighter
            idGetContext.fillStyle = grad; // color
            idGetContext.fillRect(1,1,W,H);


            //Fill the canvas with circles
            var len = circles.length;
            for(var n=0; n < len; n++) {
                var cir = circles[n];
                createCircles(idGetContext, grad, cir, W, H);
            }

        };

        var circles = [], // array containing the circles
            num = 21; // number of circles

        for(var i=0; i < num; i++ ){
            circles.push(new createCircle());
        }


        document.addEventListener(
            'touchmove',
            function(e) {

                e.preventDefault();
            },
            false
        );

        setInterval(drawCircle,0);


    }])


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

    // to encapsulate functionality
    .factory('loginService', ['$location', function($location){

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

        $scope.t6 = "Blog";
        $scope.t7 = "Twitter";
        $scope.t8 = "e-mail";
        $scope.t9 = "Log-in";
        $scope.t91  = "Sign-in";
        $scope.t10  = "About me";
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

    .controller('validPassword', ['$scope', function ($scope) {

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