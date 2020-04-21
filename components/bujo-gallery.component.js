(function() {

    var app = angular.module("personalWebsite");

    app.component('bujoGallery', {
        templateUrl: 'components/bujo-gallery.html',
        controller: 'bujoGalleryController'
    });

    app.controller('bujoGalleryController', bujoGalleryController);

    function bujoGalleryController() {
        var ctrl = this;
        var photo_num = 1;
        ctrl.imgSrc = 'images/bujo/bujo_1.png';

        ctrl.prev = function ()
        {
            console.log("press prev");
            if(photo_num != 1){
                --photo_num;
            }
            else{
                photo_num = 1;
            }
            ctrl.imgSrc = 'images/bujo/bujo_' + photo_num + '.png';
        }

        ctrl.next = function ()
        {
            console.log("press next");
            if(photo_num != 8){
                ++photo_num;
            }
            else{
                photo_num = 8;
            }
            ctrl.imgSrc = 'images/bujo/bujo_' + photo_num + '.png';
        }
    }


})();