// script.js

    // create the module and name it mmvApp
        // also include ngRoute for all our routing needs
    var mmvApp = angular.module('mmvApp', ['ngRoute']);

    // configure our routes
    mmvApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/mymongoview/pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/views', {
                templateUrl : '/mymongoview/pages/views.html',
                controller  : 'viewsController'
            })

            // route for the contact page
            .when('/others', {
                templateUrl : '/mymongoview/pages/others.html',
                controller  : 'othersController'
            });
    });

    // create the controller and inject Angular's $scope
    mmvApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    mmvApp.controller('viewsController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    mmvApp.controller('othersController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });