'use strict';

// Register `updateMovie` component, along with its associated controller and template
angular.
  module('updateMovie').
  component('updateMovie', {
    templateUrl: 'update-movie/update-movie.template.html',
    controller: ['$routeParams', 'movie', '$scope',
      function updateMovieController($routeParams, movie, $scope) {
        var self = this;
        self.movie = movie.getOne({movieId: $routeParams.movieId});
        self.actors = movie.getMovieActors({movieId: $routeParams.movieId});
        self.categories = movie.getMovieCategories({movieId: $routeParams.movieId});
        $scope.deleteOne = function(){
            movie.deleteOne({movieId: $routeParams.movieId});
            window.alert("Movie deleted!");
        };
      }
    ]
  });
