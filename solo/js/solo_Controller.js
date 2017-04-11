angular.module('ProjectSolo', [])
       .controller('SoloController', SoloController)

SoloController.$inject = ['$http']

function SoloController($http) {
  var self = this
  self.all = []
  self.newUser = {}

  self.addUser = addUser
  self.displayUsers = displayUsers
  self.deleteUser = deleteUser

  function displayUsers() {

    $http
      .get('https://sheltered-sea-41109.herokuapp.com/api/users')
      .then(function(res) {
        self.all = res.data
        console.log(res.data)
      })
  }
  displayUsers()

  function addUser() {
    $http
      .post('https://sheltered-sea-41109.herokuapp.com/api/users', self.newUser)
      .then(function(res) {
        displayUsers()
      })
      self.newUser = {}
  }

  function deleteUser() {
    $http
      .delete('https://sheltered-sea-41109.herokuapp.com/api/users' + user._id)
      .then(function(res) {
        displayUsers()
      })
  }
}
