'use strict';

describe('movieList', function() {

  // Load the module that contains the `movieList` component before each test
  beforeEach(module('movieList'));

  // Test the controller
  describe('movieListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('movies/movies.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('movieList');
    }));

    it('should create a `movies` property with 2 movies fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.movies).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.movies).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
