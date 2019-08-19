(function() {

    var app = angular.module("personalWebsite");

    app.component('navbar', {
        templateUrl: 'components/navbar.html',
        controller: 'navbarController',
        bindings: {
            active: "@"
        }
    });

    app.controller('navbarController', navbarController);

    function navbarController() {
        var ctrl = this;
        ctrl.active = "aboutMe"

        ctrl.$init = function () {
            ctrl.aboutMe = "inactive";
            ctrl.contact = "inactive";
            ctrl.hobbies = "inactive";
            ctrl.projects = "inactive";
            switch(ctrl.active) {
                case "aboutMe":
                    ctrl.aboutMe = "active";
                case "contact":
                    ctrl.contact = "active";
                case "hobbies":
                    ctrl.hobbies = "active";
                case "projects":
                    ctrl.projects = "active";
                default:
                    break;
            }
        }
        

    }
})();