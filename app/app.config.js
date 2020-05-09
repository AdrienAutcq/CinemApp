'use strict';

angular.
  module('cinemApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/movies', {
          template: '<movie-list></movie-list>'
        })
        .when('/movies/:movieId', {
          template: '<movie-detail></movie-detail>'
        })
        .when('/actors/:actorId', {
          template: '<actor-detail></actor-detail>'
        })
        .otherwise('/movies');
    }
  ]);
