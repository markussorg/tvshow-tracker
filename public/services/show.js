angular.module('MyApp')
  .factory('Show', ['$http', function($http) {
    var alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

    var genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];

    return {
      alphabet: alphabet,

      genres: genres,

      getShows: function() {
        return $http.get('/api/shows');
      },
      getShow: function(id) {
        return $http.get('/api/shows/' + id);
      },
      getShowsByGenre: function(genre) {
        return $http.get('/api/shows?genre=' + genre);
      },
      getShowsByAlphabet: function(character) {
        return $http.get('/api/shows?alphabet=' + character);
      }
    };
  }]);