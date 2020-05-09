'use strict';

angular.
  module('core.movie').
  factory('movie', ['$resource','$http',
    function($resource,$http) {
      return $resource({}, {}, {
        getAll: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/movies",
          headers: {
             "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
             "Content-Type": "application/json"
           },
          params: {},
          isArray: true
        },
        getOne: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/movies/:movieId",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {movieId: '0'}
        },
        getMovieActors: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/movies/:movieId/actors",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {movieId: '0'},
          isArray: true
        },
        getMovieCategories: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/movies/:movieId/categories",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {movieId: '0'},
          isArray: true
        }
      });
    }
  ]);
