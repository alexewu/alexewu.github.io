(function() {

    var app = angular.module("personalWebsite");

    app.component('photoModal', {
        templateUrl: 'components/photo-modal.html',
        controller: 'photoModalController',
        bindings: {
            file: "@"
        }
    });

    app.controller('photoModalController', photoModalController);

    function photoModalController() {
        var ctrl = this;
        
    }
})();