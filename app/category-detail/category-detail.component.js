'use strict';

// Register `categoryDetail` component, along with its associated controller and template
angular.
  module('categoryDetail').
  component('categoryDetail', {
    templateUrl: 'category-detail/category-detail.template.html',
    controller: ['$routeParams', 'category',
      function categoryDetailController($routeParams, category) {
        var self = this;
        var categoryName;
        self.movies = category.getCategoryMovies({categoryId: $routeParams.categoryId});
        category.getAll()
          .$promise.then(function(categories) {
            var i=0;
            self.categoryName = "";
            while (i<categories.length && self.categoryName=="") {
              if (categories[i].id==$routeParams.categoryId) {
                self.categoryName = categories[i].name;
              }
              i++;
            }
          });
      }
    ]
  });
