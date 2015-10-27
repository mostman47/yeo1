/*
 ===================
 @author: Nam Phan. Nick-name: o0most0o
 @date: 2015
 ===================
 */
define([
  'require',
  'angular',
  'app',
  'routes'
], function (require, ng) {
  'use strict';

  /*
   * place operations that need to initialize prior to app start here
   * using the `run` function on the top-level module
   */

  require(['requirejs-domready!'], function (document) {
    ng.bootstrap(document, ['app']);
  });
});
