(function() {

    var app = angular.module("personalWebsite");

    app.component('resumeSection', {
        templateUrl: 'components/resume-section.html',
        controller: 'resumeSectionController',
        bindings: {
            section: "@"
        }
    });

    app.controller('resumeSectionController', resumeSectionController);
    resumeSectionController.$inject = ["$http"];

    function resumeSectionController($http) {
        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.jsonFileName = "";
            switch(ctrl.section)
            {
                case "experience":
                    ctrl.jsonFileName = 'experience.json';
                    ctrl.sectionName = 'Experience';
                    break;
                case "education":
                    ctrl.jsonFileName = 'education.json';
                    ctrl.sectionName = 'Education';
                    break;
                case "projects":
                    ctrl.jsonFileName = 'projects.json';
                    ctrl.sectionName = 'Projects';
                    break;
                default:
                    break;
            }
            
            $http.get(ctrl.jsonFileName)
                .then(function(response) {
                    ctrl.items = response.data;
                });
        }
       

        
    }
})();