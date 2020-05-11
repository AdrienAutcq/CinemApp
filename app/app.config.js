'use strict';

angular.
  module('cinemApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/movies', {
          template: '<movie-list></movie-list>'
        })
        .when('/movies/:movieId', {
          template: '<movie-detail></movie-detail>'
        })
        .when('/actors/:actorId', {
          template: '<actor-detail></actor-detail>'
        })
        .when('/categories', {
          template: '<category-list></category-list>'
        })
        .when('/categories/:categoryId', {
          template: '<category-detail></category-detail>'
        })
        .when('/newmovie', {
          template: '<add-movie></add-movie>'
        })
        .when('/newactor', {
          template: '<add-actor></add-actor>'
        })
        .when('/newcategory', {
          template: '<add-category></add-category>'
        })
        .when('/updateMovie/:movieId', {
          template: '<update-movie></update-movie>'
        })
        .when('/updateActor/:actorId', {
          template: '<update-actor></update-actor>'
        })
        .otherwise('/movies');
    }
  ]);
