angular.module('app.controllers', [])

  .controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
  ])

  .controller('soloCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http) {
      $scope.newMessage = ''
      $scope.messages = []
      $scope.sendMessage = sendMessage


      function sendMessage() {
        console.log($scope.newMessage)
        $scope.messages.push({
          name: "User",
          message: $scope.newMessage
        })
        $http
          .post('https://sheltered-sea-41109.herokuapp.com/watson', {
            message: $scope.newMessage,
            context: $scope.conversationContext
          })
          .then(function(response) {
            $scope.latestMessage = response.data.responseText
            if (!$scope.conversationContext) {
              $scope.conversationContext = response.data.context
            }
            $scope.messages.push({
              name: "SOLO",
              message: response.data.responseText
            })
            console.log(response.data)
          })
          $scope.newMessage = ""
      }
    }
  ])


  .controller('accountCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http) {
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



    }
  ])

  .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
  ])
