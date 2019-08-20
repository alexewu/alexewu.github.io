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


        $http.get('experience.json')
        .then(function(response) {
            ctrl.items = response.data;
            console.log(response);
            console.log("success");
        });

        $http.get('/experience.json')
        .then(function(response) {
            ctrl.items = response.data;
            console.log(response);
            console.log("success");
        });
        
    }
})();