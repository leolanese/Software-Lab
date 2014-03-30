var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.skill1 = 'javascript',
    $scope.skill2 = 'HTML5',
    $scope.skill3 = 'CSS3',
    $scope.skill4 = 'RWD',
    $scope.skill5 = 'MVC',
    $scope.skill6 = 'TDD/BDD'

}]);
myApp.controller('LabelCtrl', ['$scope', function ($scope) {
    $scope.name = "I'm Leo.";
    $scope.jobTitle = "I'm a Front-end Dev.";
    $scope.workLocation = "I'm in London, UK";
}]);
myApp.controller('FooterCtrl', ['$scope', function ($scope) {
    $scope.t6 = "Blog";
    $scope.t7 = "Lab";
    $scope.t8 = "e-mail";
}]);






setInterval(drawCircle, 2);


document.addEventListener(
    'touchmove',
    function(e) {
        e.preventDefault();
    },
    false
);