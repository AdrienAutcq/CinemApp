'use strict';

angular.
  module('addMovie').
  component('addMovie', {
    templateUrl: 'add-movie/add-movie.template.html',
    controller: ['$routeParams', 'movie', '$scope', 'actor', 'category',
      function addMovieController($routeParams, movie, $scope, actor, category) {
        var self = this;
        self.allActors = actor.getAll();
        self.selectedActors = [];
        self.allCategories = category.getAll();
        self.selectedCategories = [];

        $scope.addActor = function(myActor) {
            var myActorObj = JSON.parse(myActor);
            if (self.selectedActors.filter(function(e) { return e.id == myActorObj.id; }).length == 0) {
                self.selectedActors.push(myActorObj);
            }
        };
        $scope.removeActor = function(myActor) {
            var removeIndex = self.selectedActors.map(function(item) { return item.id; }).indexOf(myActor.id);
            self.selectedActors.splice(removeIndex, 1);
        };
        $scope.addCategory = function(myCategory) {
            var myCategoryObj = JSON.parse(myCategory);
            if (self.selectedCategories.filter(function(e) { return e.id == myCategoryObj.id; }).length == 0) {
                self.selectedCategories.push(myCategoryObj);
            }
        };
        $scope.removeCategory = function(myCategory) {
            var removeIndex = self.selectedCategories.map(function(item) { return item.id; }).indexOf(myCategory.id);
            self.selectedCategories.splice(removeIndex, 1);
        };
        $scope.addMovie = function(movieToAdd) {
            // Use movie service to POST one movie
            movie.postOne({movie: movieToAdd}).$promise.then(function(data) {

                // Add actors to movie's actors list
                for (var myActor of self.selectedActors) {
                    movie.addActorToMovie({movieId: data.id, actorId: myActor.id}).$promise.then(function(actorData) {
                        console.log(myActor.last_name + " added to movie's actors list");
                    });
                }

                // Add categories to movie's categories list
                for (var myCategory of self.selectedCategories) {
                    movie.addCategoryToMovie({movieId: data.id, categoryId: myCategory.id}).$promise.then(function(categoryData) {
                        console.log(myCategory.name + " added to movie's categories list");
                    });
                }

                window.alert("Movie added!");
            }
            );
        };
      }
    ]
  });
