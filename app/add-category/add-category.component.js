'use strict';

angular.
  module('addCategory').
  component('addCategory', {
    templateUrl: 'add-category/add-category.template.html',
    controller: ['$routeParams', 'category', '$scope',
      function addCategoryController($routeParams, category, $scope) {
        $scope.addCategory = function(categoryToAdd) {
            // Use category service to POST one category
            category.postOne({category: categoryToAdd}).$promise.then(function(data) {
                window.alert("Category added!");
            });
        };
      }
    ]
  });
