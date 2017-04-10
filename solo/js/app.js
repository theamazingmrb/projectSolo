angular.module('ProjectSolo', ['ui.router'])
       .config(UserRouter)

UserRouter.$inject = ['$stateProvider', 'urlRouterProvider']
function UserRouter($stateProvider, $urlRouterProvider) {
    //front end routing with ui router
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'user_templates/index.html'
      })
      .state('new', {
        url: '/new',
        templateUrl: 'user_templates/news.html'
      })
      .state('show', {
      url: '/beans/:id',
      templateUrl: 'beans_templates/show.html'
      });

      $urlRouterProvider.otherwise('/')
}
