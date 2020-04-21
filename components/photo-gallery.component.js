(function() {

    var app = angular.module("personalWebsite");

    app.component('photoGallery', {
        templateUrl: 'components/photo-gallery.html',
        controller: 'photoGalleryController'
    });

    app.controller('photoGalleryController', photoGalleryController);
    //app.directive('photoGalleryDirective', photoGalleryDirective);
    photoGalleryDirective.$inject = ["$scope"];

    function photoGalleryController() {
        var ctrl = this;
        ctrl.images = [{
            src: 'images/piggies/piggy_1.jpg',
            title: 'Pic 1'
          }, {
            src: 'images/piggies/piggy_1.jpg',
            title: 'Pic 2'
          }, {
            src: 'images/piggies/piggy_1.jpg',
            title: 'Pic 3'
          }, {
            src: 'images/piggies/piggy_1.jpg',
            title: 'Pic 4'
          }, {
            src: 'images/piggies/piggy_1.jpg',
            title: 'Pic 5'
          }];
    }

    function photoGalleryDirective() {
        return{
            restrict : 'AE',
            templateUrl : 'slide.html',
            scope: {
              images : '=',
       
            },
            
            link : function(scope,elem,attrs){
               
              scope.currentIndex = 0;
              scope.next = function(){
                scope.currentIndex < scope.images.length-1 ? scope.currentIndex++ : scope.currentIndex = 0; 
                
              }
              scope.prev = function(){
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length-1

              }
              scope.$watch('currentIndex',function(){
                scope.images.forEach(function(image){
                  image.visible = false;
                })
                scope.images[scope.currentIndex].visible = true;
              })
              // var timer;
              // var sliderFunc = function(){
              //   timer = $timeout(function(){
              //     scope.next();
              //     timer = $timeout(sliderFunc,2000);
              //   },2000)
              // }
              // sliderFunc();
              // scope.$on('$destroy',function(){
              //   $timeout.cancel(timer);
              // })
            }
          }
    }
})();