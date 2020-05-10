'use strict';

angular.
  module('addMovie').
  component('addMovie', {
    templateUrl: 'add-movie/add-movie.template.html',
    controller: ['$routeParams', 'movie', '$scope', 'actor',
      function addMovieController($routeParams, movie, $scope, actor) {
        var self = this;
        self.allActors = actor.getAll();
        self.actorsId = [];

        $scope.addActor = function(actorId) {
            self.actorsId.push(actorId);
            console.log(self.actorsId);
        }
        $scope.addMovie = function(movieToAdd) {
            // Use movie service to POST one movie
            movie.postOne({movie: movieToAdd}).$promise.then(function(data) {
                console.log(movieToAdd);
                window.alert("Movie added!");
                }
            );
        };
      }
    ]
  });
