'use strict';

angular.
  module('core.actor').
  factory('actor', ['$resource','$http',
    function($resource,$http) {
      return $resource({}, {}, {
        getAll: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/actors",
          headers: {
             "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
             "Content-Type": "application/json"
           },
          params: {},
          isArray: true
        },
        getOne: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/actors/:actorId",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {actorId: '0'}
        },
        getActorMovies: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/actors/:actorId/movies",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {actorId: '0'},
          isArray: true
        }
      });
    }
  ]);
