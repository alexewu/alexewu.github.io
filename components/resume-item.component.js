(function() {

    var app = angular.module("personalWebsite");

    app.component('resumeItem', {
        templateUrl: 'components/resume-item.html',
        controller: 'resumeItemController'
    });

    app.controller('resumeItemController', resumeItemController);

    function resumeItemController() {
        var ctrl = this;
        
        
    }
})();