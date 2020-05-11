'use strict';

angular.
  module('updateActor').
  component('updateActor', {
    templateUrl: 'update-actor/update-actor.template.html',
    controller: ['$routeParams', 'actor', '$scope', 'movie',
      function updateActorController($routeParams, actor, $scope, movie) {
        var self = this;
        self.allMovies = movie.getAll();
        self.actor = actor.getOne({actorId: $routeParams.actorId});
        self.movies = actor.getActorMovies({actorId: $routeParams.actorId});
        self.selectedMovies = self.movies;

        $scope.addMovie = function(myMovie) {
            var myMovieObj = JSON.parse(myMovie);
            if (self.selectedMovies.filter(function(e) { return e.id == myMovieObj.id; }).length == 0) {
                self.selectedMovies.push(myMovieObj);
            }
        };
        $scope.removeMovie = function(myMovie) {
            var removeIndex = self.selectedMovies.map(function(item) { return item.id;}).indexOf(myMovie.id);
            self.selectedMovies.splice(removeIndex, 1);
        };
        $scope.deleteOne = function(){
            actor.deleteOne({actorId: $routeParams.actorId});
            window.alert("Actor deleted!");
        };
        $scope.updateActor = function() {
            // Update actor
            actor.updateOne({actorId: $routeParams.actorId, actor: self.actor}).$promise.then(function(data) {

                // Add movie to actor's movies list
                for (var myMovie of self.selectedMovies) {
                    actor.addMovieToActor({actorId: self.actor.id, movieId: myMovie.id}).$promise.then(function(movieData) {
                    console.log(myMovie.title + " added to actor's movies list");
                    });
                }
        
                window.alert("Actor updated!");
            });
        };
      }
    ]
  });
