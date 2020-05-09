'use strict';

describe('movieDetail', function() {

  // Load the module that contains the `movieDetail` component before each test
  beforeEach(module('movieDetail'));

  // Test the controller
  describe('movieDetailController', function() {
    var $httpBackend, ctrl;
    var xyzmovieData = {
      name: 'movie xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('movies/xyz.json').respond(xyzmovieData);

      $routeParams.movieId = 'xyz';

      ctrl = $componentController('movieDetail');
    }));

    it('should fetch the movie details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.movie).toEqual({});

      $httpBackend.flush();
      expect(ctrl.movie).toEqual(xyzmovieData);
    });

  });

});
