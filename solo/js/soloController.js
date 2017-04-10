angular.module('ProjectSolo', [])
       .controller('SoloController', SoloController)

SoloController.$inject = ['$http']

function SoloController($http) {
  var self = this
  self.all = []

  function displayUsers() {
    $https
      .get('https://sheltered-sea-41109.herokuapp.com/api/users')
      .then(function(res) {
        self.all = res.date.users
      })
  }
  displayUsers()
}
