/*jshint unused: vars */
require.config({
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery.min',
    angular: '../../bower_components/angular/angular',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    uiRouter: '../../bower_components/angular/angular-ui-router',
    'angular-animate': '../../bower_components/angular-animate/angular-animate',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-route': '../../bower_components/angular-route/angular-route',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    'requirejs-domready': '../../bower_components/requirejs-domready/domReady'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    bootstrap: {
      deps: [
        'jquery'
      ]
    },
    uiRouter: {
      deps: [
        'angular'
      ]
    }
  },
  deps: [
    './bootstrap'
  ],
  packages: [

  ]
});



