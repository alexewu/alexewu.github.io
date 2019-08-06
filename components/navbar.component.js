(function() {

    var app = angular.module("personalWebsite");

    app.component('navbar', {
        templateUrl: 'components/navbar.html',
        controller: 'navbarController'
    });

    app.controller('navbarController', navbarController);

    function navbarController() {
        var ctrl = this;
    }
})();