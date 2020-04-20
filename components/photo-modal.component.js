(function() {

    var app = angular.module("personalWebsite");

    app.component('photoModal', {
        templateUrl: 'components/photo-modal.html',
        controller: 'photoModalController',
        bindings: {
            file: "@",
            number: "@",
            title: "@",
            description: "@"
        }
    });

    app.controller('photoModalController', photoModalController);

    function photoModalController() {
        var ctrl = this;
        ctrl.id = 'portfolioModal' + ctrl.number;
        
    }
})();