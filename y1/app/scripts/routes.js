/*
 ===================
 @author: Nam Phan. Nick-name: o0most0o
 @company: Reliable{coders} Inc.
 @date: 2014
 ===================
 */
define(['./app'], function (app) {
  'use strict';
  return app.module('y1App').config(function ($stateProvider, $urlRouterProvider, $routeProvider) {
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.url();
      var absUrl = $location.absUrl();
      // check to see if the path already has a slash where it should be
      // console.log(absUrl);
      if (absUrl.indexOf('?callback') > -1) {
        absUrl = absUrl.replace('?callback', '#/callback');
        window.location.replace(absUrl);
        return;
      }
      if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
        return;
      }

      if (path.indexOf('?') > -1) {
        return path.replace('?', '/?');
      }

      return path + '/';
    });
    $stateProvider.state('index', {
      url: "",
      views: {
        "viewBody": {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }
      }
    }).state('about', {
      url: "/about/",
      views: {
        "viewBody": {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        }
      }
    }).state('defaults', {
      url: "/:any/",
      views: {
        "viewBody": {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        }
      }
    });
  });
});
