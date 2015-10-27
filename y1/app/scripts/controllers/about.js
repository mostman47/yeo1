define(['./module'], function (controllers) {
  'use strict';

  /**
   * @ngdoc function
   * @name y1App.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the y1App
   */
    //angular.module('y1App.controllers.AboutCtrl', [])
  controllers.controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
});
