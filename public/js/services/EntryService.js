angular.module('EntryService', [])

.factory('Entry', ['$http', function($http) {
  return {
    //call to get all entries

    get: function() {
      return $http.get('/api/entries/');
    }, 

    create: function(entryData) {
      console.log(entryData);
      return $http.post('/entries', entryData);
    }, 

    delete: function(id) {
      return $http.delete('/entries/' + id);
    }
  }
}]);