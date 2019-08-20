(function() {

    var app = angular.module("personalWebsite");

    app.component('resumeSection', {
        templateUrl: 'components/contact-form.html',
        controller: 'contactFormController'
    });

    app.controller('contactFormController', contactFormController);
    tableController.$inject = ["$http"];

    function contactFormController($http) {
        var ctrl = this;

        $http.get('projects.json').then(function(response) {
            $scope.items = response.data;
         });
    }
})();