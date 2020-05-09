'use strict';

describe('movie', function() {
  var $httpBackend;
  var movie;
  var moviesData = [
    {name: 'movie X'},
    {name: 'movie Y'},
    {name: 'movie Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `movie` service before each test
  beforeEach(module('core.movie'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _movie_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('movies/movies.json').respond(moviesData);

    movie = _movie_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the movies data from `/movies/movies.json`', function() {
    var movies = movie.query();

    expect(movies).toEqual([]);

    $httpBackend.flush();
    expect(movies).toEqual(moviesData);
  });

});
