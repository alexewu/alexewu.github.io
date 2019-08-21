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
                break;
            case "contact":
                ctrl.contact = "active";
                break;
            case "resume":
                ctrl.resume = "active";
                break;
            case "hobbies":
                ctrl.hobbies = "active";
                break;
            case "projects":
                ctrl.projects = "active";
                break;
            default:
                break;
        }
        

    }
})();