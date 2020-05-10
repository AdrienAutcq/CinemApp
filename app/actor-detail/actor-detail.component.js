'use strict';

angular.
  module('actorDetail').
  component('actorDetail', {
    templateUrl: 'actor-detail/actor-detail.template.html',
    controller: ['$routeParams', 'actor', '$scope',
      function actorDetailController($routeParams, actor, $scope) {
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
