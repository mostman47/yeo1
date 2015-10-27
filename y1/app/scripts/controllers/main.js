define(['./module'], function (controllers) {
  'use strict';

  /**
   * @ngdoc function
   * @name y1App.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the y1App
   */
    //angular.module('y1App.controllers.MainCtrl', [])
  controllers.controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
});
