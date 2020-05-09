'use strict';

angular.
  module('actorDetail').
  component('actorDetail', {
    templateUrl: 'actor-detail/actor-detail.template.html',
    controller: ['$routeParams', 'actor',
      function actorDetailController($routeParams, actor) {
        var self = this;
        self.actor = actor.getOne({actorId: $routeParams.actorId});
        self.movies = actor.getActorMovies({actorId: $routeParams.actorId});
      }
    ]
  });
