'use strict';

// Register `categoryList` component, along with its associated controller and template
angular.
  module('categoryList').
  component('categoryList', {
    templateUrl: 'category-list/category-list.template.html',
    controller: ['category',
      function categoryListController(category) {
        this.categories = category.getAll();
      }
    ]
  });
