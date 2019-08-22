(function() {

    var app = angular.module("personalWebsite");

    app.component('projectButtons', {
        templateUrl: 'components/project-buttons.html',
        controller: 'projectButtonsController'
    });

    app.controller('projectButtonsController', projectButtonsController);

    function projectButtonsController() {
        var ctrl = this;

        ctrl.clincShow = true;
        ctrl.lazShow = false;

        ctrl.clincPressed = function () {
            console.log("you pressed clinc");
        }
    }
})();