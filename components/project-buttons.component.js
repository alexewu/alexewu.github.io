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
            ctrl.lazShow = false;
            ctrl.twitterShow = false;
            ctrl.mdpShow = false;
            ctrl.stoodyShow = false;
        }

        ctrl.lazPressed = function () {
            ctrl.clincShow = false;
            ctrl.lazShow = true;
            ctrl.twitterShow = false;
            ctrl.mdpShow = false;
            ctrl.stoodyShow = false;
        }

        ctrl.twitterPressed = function () {
            ctrl.clincShow = false;
            ctrl.lazShow = false;
            ctrl.twitterShow = true;
            ctrl.mdpShow = false;
            ctrl.stoodyShow = false;
        }

        ctrl.mdpPressed = function () {
            ctrl.clincShow = false;
            ctrl.lazShow = false;
            ctrl.twitterShow = false;
            ctrl.mdpShow = true;
            ctrl.stoodyShow = false;
        }

        ctrl.stoodyPressed = function () {
            ctrl.clincShow = true;
            ctrl.lazShow = false;
            ctrl.twitterShow = false;
            ctrl.mdpShow = false;
            ctrl.stoodyShow = true;
        }
    }
})();