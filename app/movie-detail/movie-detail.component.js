'use strict';

// Register `movieDetail` component, along with its associated controller and template
angular.
  module('movieDetail').
  component('movieDetail', {
    templateUrl: 'movie-detail/movie-detail.template.html',
    controller: ['$routeParams', 'movie', '$scope',
      function movieDetailController($routeParams, movie, $scope) {
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
