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
          isArray: true
        },
        getOne: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/movies/:movieId",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          }
        },
        getMovieActors: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/movies/:movieId/actors",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          isArray: true
        },
        getMovieCategories: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/movies/:movieId/categories",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          isArray: true
        },
        postOne: {
          method: 'POST',
          url: "https://api-exercise.herokuapp.com/movies",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          }
        },
        deleteOne: {
          method: 'DELETE',
          url: "https://api-exercise.herokuapp.com/movies/:movieId",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          }
        }
      });
    }
  ]);
