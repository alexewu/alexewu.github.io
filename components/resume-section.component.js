(function() {

    var app = angular.module("personalWebsite");

    app.component('resumeSection', {
        templateUrl: 'components/resume-section.html',
        controller: 'resumeSectionController'
    });

    app.controller('resumeSectionController', resumeSectionController);
    resumeSectionController.$inject = ["$http"];

    function resumeSectionController($http) {
        var ctrl = this;

        ctrl.$onInit = function () {
             $http.get('experience.json')
                .then(function(response) {
                    ctrl.items = response.data;
                });
        }
       

        
    }
})();