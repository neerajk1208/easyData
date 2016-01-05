angular.module('EntryCtrl', [])

.controller('EntryController', function($scope, Entry) {
  $scope.tagline = 'Feel free to edit this as required.';

  $scope.data = {};
  $scope.data.entries = [{name: "john", "location": "sf", "rating": 45}, {name: "bob", "location": "la", "rating": 32}];

  $scope.getAll = function() {
    Entry.get()
      .then(function(entries) {
        $scope.data.entries = entries; 
        console.log('succeess');
      });
  }

  $scope.addEntry = function() {
    //on save
    Entry.create($scope.entry)
    .then(function() {
      console.log('success in adding entry');
      $scope.getAll();
    })
    .catch(function(error) {
      console.log("there was an error", error);
    });
  }

  $scope.deleteEntry = function() {
    Entry.delete($scope.entry.id)
      .then(function() {
        console.log("success in deleting entry");
        $scope.getAll();
      });
  }
});