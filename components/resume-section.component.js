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
        
        $http.get('resume.json')
            .then(function(response) {
                ctrl.resume = response.data;
                switch(ctrl.section) {
                    case "education":
                        ctrl.items = ctrl.resume.education;
                        ctrl.sectionName = 'Education';
                        ctrl.resume_item_style = "resume_item_1";
                        ctrl.resume_header_style = "resume_header_1";
                        break;
                    case "experience":
                        ctrl.items = ctrl.resume.experience;
                        ctrl.sectionName = 'Experience';
                        ctrl.resume_item_style = "resume_item_2";
                        ctrl.resume_header_style = "resume_header_2";
                        break;
                    case "projects":
                        ctrl.items = ctrl.resume.projects;
                        ctrl.sectionName = 'Projects';
                        ctrl.resume_item_style = "resume_item_3";
                        ctrl.resume_header_style = "resume_header_3";
                        break;
                    default:
                        break;
                }
            });
    }
})();