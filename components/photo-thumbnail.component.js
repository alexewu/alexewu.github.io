(function() {

    var app = angular.module("personalWebsite");

    app.component('photoThumbnail', {
        templateUrl: 'components/photo-thumbnail.html',
        controller: 'photoThumbnailController',
        bindings: {
            file: "@",
            number: "@"
        }
    });

    app.controller('photoThumbnailController', photoThumbnailController);

    function photoThumbnailController() {
        var ctrl = this;
        ctrl.dataTarget = '#portfolioModal' + ctrl.number;
    }
    
})();