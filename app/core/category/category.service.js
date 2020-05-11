'use strict';

angular.
  module('core.category').
  factory('category', ['$resource','$http',
    function($resource,$http) {
      return $resource({}, {}, {
        getAll: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/categories",
          headers: {
             "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
             "Content-Type": "application/json"
           },
          isArray: true
        },
        getCategoryMovies: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/categories/:categoryId/movies",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {categoryId: '@categoryId'},
          isArray: true
        },
        postOne: {
          method: 'POST',
          url: "https://api-exercise.herokuapp.com/categories",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          }
        },
        deleteOne: {
          method: 'DELETE',
          url: "https://api-exercise.herokuapp.com/categories/:categoryId",
          headers: {
          "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
          "Content-Type": "application/json"
          },
          params: {categoryId: '@categoryId'}
        }
      });
    }
  ]);
