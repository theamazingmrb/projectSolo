angular.module('ProjectSolo', ['ui.router'])
       .config(UserRouter)
console.log("poop")
UserRouter.$inject = ['$stateProvider', 'urlRouterProvider']
function UserRouter($stateProvider, $urlRouterProvider) {
    //front end routing with ui router
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'users_templates/index.html'
      })
      .state('new', {
        url: '/new',
        templateUrl: 'users_templates/news.html'
      })
      .state('show', {
      url: '/users/:id',
      templateUrl: 'users_templates/show.html'
      });

      $urlRouterProvider.otherwise('/')
}
