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
    navbarController.$inject = ["$anchorScroll", "$location"];

    function navbarController($anchorScroll, $location) {
        //TODO: put border around active tab
        var ctrl = this;
        
        ctrl.aboutMe = "inactive";
        ctrl.contact = "inactive";
        ctrl.hobbies = "inactive";
        ctrl.projects = "inactive";
        ctrl.resume = "inactive";
        switch(ctrl.active) {
            case "aboutMe":
                ctrl.aboutMe = "active";
                ctrl.showAboutMeNavBar = true;
                break;
            case "contact":
                ctrl.contact = "active";
                ctrl.showAboutMeNavBar = false;
                break;
            case "resume":
                ctrl.resume = "active";
                ctrl.showAboutMeNavBar = false;
                break;
            case "hobbies":
                ctrl.hobbies = "active";
                ctrl.showAboutMeNavBar = false;
                break;
            case "projects":
                ctrl.projects = "active";
                ctrl.showAboutMeNavBar = false;
                break;
            default:
                break;
        }
        
        ctrl.gotoPhotography = function() {
            $location.hash('photography');
            $anchorScroll();
        };

        ctrl.gotoBujo = function() {
            $location.hash('bujo');
            $anchorScroll();
        };

        ctrl.gotoPiggies = function() {
            $location.hash('piggies');
            $anchorScroll();
        };
    }
})();