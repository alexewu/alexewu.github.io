(function() {

    var app = angular.module("personalWebsite");

    app.component('contactForm', {
        templateUrl: 'components/contact-form.html',
        controller: 'contactFormController'
    });

    app.controller('contactFormController', contactFormController);

    function contactFormController() {
        var ctrl = this;

    }
})();