'use strict';

angular.
  module('addActor').
  component('addActor', {
    templateUrl: 'add-actor/add-actor.template.html',
    controller: ['$routeParams', 'actor', '$scope',
      function addActorController($routeParams, actor, $scope) {
        $scope.addActor = function(actorToAdd) {
            actor.postOne({actor: actorToAdd}).$promise.then(function(data) {
                window.alert("Actor added!")
            });
        };
      }
    ]
  });
