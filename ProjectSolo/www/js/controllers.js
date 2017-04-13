angular.module('app.controllers', [])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('soloCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $scope.messages = []
  $scope.grabMessage = grabMessage

  function grabMessage() {
    $http
      .get('http://localhost:3000/watson')
      .then(function(res) {
        $scope.messages = res.data
        console.log("front end: " + $scope.messages.text)
      })
  }
  grabMessage()

}])

.controller('accountCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $scope.users = []
  $scope.displayUsers = displayUsers

  function displayUsers() {

  $http
    .get('https://sheltered-sea-41109.herokuapp.com/api/users')
    .then(function(res) {
      $scope.users = res.data
      console.log($scope.users)
    })
}
  displayUsers()



}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
