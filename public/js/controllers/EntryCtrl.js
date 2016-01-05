angular.module('EntryCtrl', [])

.controller('EntryController', function($scope, Entry) {
  $scope.tagline = 'Feel free to edit this as required.';

  $scope.data = {};
  $scope.data.entries = [];

  $scope.getAll = function() {
    Entry.get()
      .then(function(entries) {
        $scope.data.entries = entries; 
        console.log('succeess');
        console.log(entries);
      });
  }

  $scope.addEntry = function() {
    //on save
    
    var temp = {
      name: document.getElementsByName("name")[0].value, 
      location: document.getElementsByName("location")[0].value, 
      rating: document.getElementsByName("rating")[0].value
    };


    $scope.data.entries.push(temp);

    Entry.create(temp)
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

  $scope.getAll();
});