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
        
        ctrl.prev = function ()
        {
            console.log("press prev");
            if(ctrl.number != 1){
                --ctrl.number;
            }
            else{
                ctrl.number = 1;
            }
            ctrl.id = 'portfolioModal' + ctrl.number;
            console.log(ctrl.id);

        }

        ctrl.next = function ()
        {
            console.log("press next");
            if(ctrl.number != 14){
                ++ctrl.number;
            }
            else{
                ctrl.number = 14;
            }
            ctrl.id = 'portfolioModal' + ctrl.number;
            console.log(ctrl.id);
        }
    }
})();