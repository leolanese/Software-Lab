// V <-$scope-> C

myLabApp.controller('LoginCtrl', ['$scope', function ($scope) {
    "use strict";

    // scope hack
    window.scope = $scope;

    $scope.t9 = "Login";
    $scope.t10  = "More about me...";


    $scope.login = { username: "", password: "" };

    $scope.anchorClicks = 0;
    $scope.buttonClicks = 0;

    $scope.handleButtonClick = function() {
        $scope.buttonClicks++;
    };
    setInterval(window.drawCircle, 2);

}]);


myLabApp.controller('moreAboutMe', ['$scope', function ($scope) {
    "use strict";

    $scope.t11  = "I'm a web developer";
    $scope.t12 = "Login";

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

}]);

