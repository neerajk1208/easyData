angular.module('EntryService', [])

.factory('Entry', ['$http', function($http) {
  return {
    //call to get all entries

    get: function() {
      return $http.get('/entries');
    }, 

    create: function(entryData) {
      console.log(entryData);
      return $http.post('/entries', entryData);
    }, 

    update: function(entryData) {
      console.log(entryData);
      return $http.put('/entries', entryData);
    },

    delete: function(id) {
      return $http.delete('/entries/' + id);
    }
  }
}]);