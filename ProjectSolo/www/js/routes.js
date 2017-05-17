angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.login', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.solo', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/solo.html',
        controller: 'soloCtrl'
      }
    }
  })

  .state('menu.account', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.signup', {
    url: '/signup',
    views:{
      'side-menu21': {
    templateUrl: 'templates/signup.html',
    controller: 'accountCtrl'
     }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')



});
