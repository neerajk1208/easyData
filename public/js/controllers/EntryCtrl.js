angular.module('EntryCtrl', [])

.controller('EntryController', function($scope, Entry, $routeParams) {
  $scope.tagline = "Add in a restaurant, and we'll update it in the database!";
  $scope.data = {};
  $scope.data.entries = [];
  $scope.inputs;
  $scope.test = "hello";

  $scope.validate = function(value, id, location, rating) {
    var temp = {
      _id: id,
      name: value, 
      location: location, 
      rating: rating
    }

    Entry.update(temp)
    .then(function() {
      console.log('success in adding entry');
      $scope.getAll();
    })
    
    return value;

  }

  $scope.getAll = function() {
    Entry.get()
      .then(function(entries) {
        $scope.data.entries = entries.data; 
        console.log('succeess');


        document.getElementsByName("name")[0].value = '';
        document.getElementsByName("location")[0].value = '';
        document.getElementsByName("rating")[0].value = '';
        $scope.search = '';
      });

  }

  $scope.updateIt = function() {
    console.log('hello');
  }

  $scope.addEntry = function() {
    //on save
    
    var temp = {
      name: document.getElementsByName("name")[0].value, 
      location: document.getElementsByName("location")[0].value, 
      rating: document.getElementsByName("rating")[0].value
    };

    console.log($scope.name);


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

  $scope.deleteEntry = function(id) {
    console.log("this is the route params", $routeParams);
    $routeParams.id = id;
    Entry.delete($routeParams)
      .then(function() {
        console.log("success in deleting entry");
        $scope.getAll();
      });
  }

  $scope.updateEntry = function() {
    console.log("This is inputs ", $scope.inputs);
    var temp = {
      name: this.entry.name,
      location: this.entry.location, 
      rating: this.entry.rating
    }

    Entry.update(temp)
      .then(function() {
        console.log('success in updating entry');
        $scope.getAll();
      })
      .catch(function(error) {
        console.log('there was an error with the update', error);
      });
  }

  $scope.getAll();
});