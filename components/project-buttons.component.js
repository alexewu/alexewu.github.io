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
            setShowsToFalse();
            ctrl.clincShow = true;
        }

        ctrl.lazPressed = function () {
            setShowsToFalse();
            ctrl.lazShow = true;
        }

        ctrl.twitterPressed = function () {
            setShowsToFalse();
            ctrl.twitterShow = true;
        }

        ctrl.mdpPressed = function () {
            setShowsToFalse();
            ctrl.mdpShow = true;
        }

        ctrl.stoodyPressed = function () {
            setShowsToFalse();
            ctrl.stoodyShow = true;
        }

        ctrl.paintPressed = function () {
            setShowsToFalse();
            ctrl.paintShow = true;
        }

        function setShowsToFalse() {
            ctrl.clincShow = false;
            ctrl.lazShow = false;
            ctrl.twitterShow = false;
            ctrl.mdpShow = false;
            ctrl.stoodyShow = false;
            ctrl.paintShow = false;
        }
    }
})();