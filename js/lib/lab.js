var myApp = window.angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.skill1 = 'javascript';
    $scope.skill2 = 'HTML5';
    $scope.skill3 = 'CSS3';
    $scope.skill4 = 'RWD';
    $scope.skill5 = 'MVC';
    $scope.skill6 = 'TDD/BDD';

}]);
myApp.controller('LabelCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.name = "I'm Leo.";
    $scope.jobTitle = "I'm a Front-end Developer";
    $scope.workLocation = "I'm in London, UK";

}]);
myApp.controller('FooterCtrl', ['$scope', function ($scope) {
    "use strict";

    $scope.t6 = "Blog";
    $scope.t7 = "Twitter";
    $scope.t8 = "e-mail";

}]);

setInterval(window.drawCircle, 2);

$(window).resize(function(){
    $('#imageSize').text($('.featurette img').attr('src'));
    $('#bgImageSize').text($('.bg-img').css('background-image'));
});
$(window).resize();