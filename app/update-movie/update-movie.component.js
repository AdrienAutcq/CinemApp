'use strict';

// Register `updateMovie` component, along with its associated controller and template
angular.
  module('updateMovie').
  component('updateMovie', {
    templateUrl: 'update-movie/update-movie.template.html',
    controller: ['$routeParams', 'movie', '$scope', 'actor', 'category',
      function updateMovieController($routeParams, movie, $scope, actor, category) {

        var self = this;
        self.allActors = actor.getAll();
        self.allCategories = category.getAll();
        movie.getOne({movieId: $routeParams.movieId}).$promise.then(function(data) {
            self.movie = data;
            self.movieReleaseDate = new Date(data.release_date);
        });
        movie.getMovieActors({movieId: $routeParams.movieId}).$promise.then(function(data) {
            self.actors = [];
            for (var i=0; i<data.length; i++) {
                // Convert resource to regular object
                self.actors.push(JSON.parse(angular.toJson(data[i])));
            }
            // Copy actors to another array
            self.selectedActors = [...self.actors];
        });
        movie.getMovieCategories({movieId: $routeParams.movieId}).$promise.then(function(data) {
        	self.categories = [];
        	for (var i=0; i<data.length; i++) {
        	    // Convert resource to regular object
                self.categories.push(JSON.parse(angular.toJson(data[i])));
            }
            // Copy categories to another array
        	self.selectedCategories = [...self.categories];
        });

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
        $scope.deleteMovie = function(){
            movie.deleteOne({movieId: $routeParams.movieId});
            window.alert("Movie deleted!");
        };
        $scope.updateMovie = function() {
          // Update movie
          movie.updateOne({movieId: $routeParams.movieId, movie: self.movie}).$promise.then(function(data) {

            // Add actors to movie's actors list
            for (var myActor of self.selectedActors) {
                if (self.actors.filter(function(e) { return e.id == myActor.id; }).length == 0) {
                    movie.addActorToMovie({movieId: self.movie.id, actorId: myActor.id}).$promise.then(function(actorData) {
                        console.log(myActor.first_name + " " + myActor.last_name + " added to movie's actors list");
                    });
                }
            }

            // Add categories to movie's categories list
            for (var myCategory of self.selectedCategories) {
                if (self.categories.filter(function(e) { return e.id == myCategory.id; }).length == 0) {
                    movie.addCategoryToMovie({movieId: self.movie.id, categoryId: myCategory.id}).$promise.then(function(categoryData) {
                        console.log(myCategory.name + " added to movie's categories list");
                    });
                }
            }

            window.alert("Movie updated!");
          });
        };

      }
    ]
  });
