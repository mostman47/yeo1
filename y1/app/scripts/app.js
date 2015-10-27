define([
  'angular',
  'uiRouter',
  //'angular-loading-bar',
  //'handle2',
  //'niceScroll',
  './controllers/index',
  //'./directives/index',
  //'./filters/index',
  //'./services/index',
], function (ng) {
  'use strict';

  return ng.module('y1App', [
    'app.services',
    'app.controllers',
    'app.filters',
    'app.directives',
    'ui.router',
    //'angularUtils.directives.dirPagination',
    //'cfp.loadingBarInterceptor'
  ]);
});

