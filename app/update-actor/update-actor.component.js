'use strict';

angular.
  module('updateActor').
  component('updateActor', {
    templateUrl: 'update-actor/update-actor.template.html',
    controller: ['$routeParams', 'actor', '$scope',
      function updateActorController($routeParams, actor, $scope) {
        var self = this;
        self.actor = actor.getOne({actorId: $routeParams.actorId});
        self.movies = actor.getActorMovies({actorId: $routeParams.actorId});
        $scope.deleteOne = function(){
            actor.deleteOne({actorId: $routeParams.actorId});
            window.alert("Actor deleted!");
        };
      }
    ]
  });
