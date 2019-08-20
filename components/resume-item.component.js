(function() {

    var app = angular.module("personalWebsite");

    app.component('resumeItem', {
        templateUrl: 'components/resume-item.html',
        controller: 'resumeItemController',
        bindings: {
            item: "@"
        }
    });

    app.controller('resumeItemController', resumeItemController);

    function resumeItemController() {
        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.item = angular.fromJson(ctrl.item);
        }
        
    }
})();