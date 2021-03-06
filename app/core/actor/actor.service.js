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
          isArray: true
        },
        getOne: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/actors/:actorId",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {actorId: '@actorId'}
        },
        getActorMovies: {
          method: 'GET',
          url: "https://api-exercise.herokuapp.com/actors/:actorId/movies",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {actorId: '@actorId'},
          isArray: true
        },
        postOne: {
          method: 'POST',
          url: "https://api-exercise.herokuapp.com/actors",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          }
        },
        deleteOne: {
          method: 'DELETE',
          url: "https://api-exercise.herokuapp.com/actors/:actorId",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {actorId: '@actorId'}
        },
        addMovieToActor: {
          method: 'PATCH',
          url: "https://api-exercise.herokuapp.com/actors/:actorId/movies/:movieId",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {actorId: '@actorId', movieId: '@movieId'}
        },
        updateOne: {
          method: 'PATCH',
          url: "https://api-exercise.herokuapp.com/actors/:actorId",
          headers: {
            "Authorization":"2d7a4814d02fb3ad6f28b19ba2004ede",
            "Content-Type": "application/json"
          },
          params: {actorId: '@actorId'}
        }
      });
    }
  ]);
