'use strict';

// Register `movieList` component, along with its associated controller and template
angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: ['movie',
      function movieListController(movie) {
        this.movies = movie.getAll();
        this.orderProp = 'release_date';
      }
    ]
  });
