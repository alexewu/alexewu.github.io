(function() {

    var app = angular.module("personalWebsite");

    app.component('projectButtons', {
        templateUrl: 'components/project-buttons.html',
        controller: 'projectButtonsController'
    });

    app.controller('projectButtonsController', projectButtonsController);

    function projectButtonsController() {
        var ctrl = this;
        
        ctrl.clincPressed = function () {
            ctrl.clincShow = true;
        }

        ctrl.lazPressed = function () {
            ctrl.lazShow = true;
        }

        ctrl.twitterPressed = function () {
            ctrl.twitterShow = true;
        }

        ctrl.mdpPressed = function () {
            ctrl.mdpShow = true;
        }

        ctrl.stoodyPressed = function () {
            ctrl.stoodyShow = true;
        }

        function setShowsToFalse() {
            ctrl.clincShow = false;
            ctrl.lazShow = false;
            ctrl.twitterShow = false;
            ctrl.mdpShow = false;
            ctrl.stoodyShow = false;
        }
    }
})();