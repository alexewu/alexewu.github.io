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

        $http.get('projects.json').then(function(response) {
            $scope.items = response.data;
         });
    }
})();