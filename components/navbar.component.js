(function() {

    var app = angular.module("personalWebsite");

    app.component('navbar', {
        templateUrl: 'navbar.html',
        controller: 'navbarController'
    });

    app.controller('navbarController', navbarController);

    function navbarController() {
        var ctrl = this;
    }
})();