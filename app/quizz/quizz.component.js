'use strict';

angular.
  module('quizz').
  component('quizz', {
    templateUrl: 'quizz/quizz.template.html',
    controller: ['movie', '$scope', 'category', '$http', 'actor',
      function quizzController(movie, $scope, category, $http, actor) {
        
        var self = this;

        // Player's score
        self.score = 0;

        // Initial values
        self.isDisplayedIcon = false;
        self.btn1 = "outline-dark";
        self.btn2 = "outline-dark";

        // Get all genres
        category.getAll().$promise.then(function(data) {
            self.categoryNames = self.getCategoryNames(data);
        });

        // Converts array of genre objects to array of genre names
        self.getCategoryNames = function(categories) {
            var categoriesNames = [];
            for (var myCategory of categories) {
                categoriesNames.push(myCategory.name);
            }
            return categoriesNames;
        };

        // Converts array of actors objects to array of actors names
        self.getActorNames = function(actors) {
            var actorsNames = [];
            for (var myActor of actors) {
                actorsNames.push(myActor.first_name + " " + myActor.last_name);
            }
            return actorsNames;
        };

        // Randomizes position of answers
        self.randomizeAnswers = function(cor,fal) {
            if (Math.random()>0.5) {
                self.answer1 = cor;
                self.answer2 = fal;
                self.icon1 = "check";
                self.icon2 = "close";
                self.btn1Final = "success";
                self.btn2Final = "danger";
            }
            else {
                self.answer1 = fal;
                self.answer2 = cor;
                self.icon1 = "close";
                self.icon2 = "check";
                self.btn1Final = "danger";
                self.btn2Final = "success";
            }
        };

        self.getQuestion = function() {

            // Question type
            self.questionType = Math.random();

            // Defines if question requires diplaying an image
            self.isPicture = false;

            if (self.questionType<0.66) {

                movie.getAll().$promise.then(function(data) {
                    
                    // All the movies
                    self.movies = data;
            
                    // All the movie directors
                    self.directors = [];
                    for (var myMovie of self.movies) {
                        if (self.directors.filter(function(e) { return e == myMovie.director; }).length == 0) {
                            self.directors.push(myMovie.director);
                        }
                    }
                        
                    // Some random movie
                    self.movie = self.movies[Math.floor(Math.random()*self.movies.length)];
                        
                    if (self.questionType<0.33) {
    
                        // Get correct answer (movie director)
                        self.correctAnswer = self.movie.director;
            
                        // The question
                        self.questionText = "Who directed '" + self.movie.title + "'?";
                        
                        // Find another random answer
                        self.anotherAnswer = self.directors[Math.floor(Math.random()*self.directors.length)];
                        while (self.anotherAnswer == self.correctAnswer) {
                            self.anotherAnswer = self.directors[Math.floor(Math.random()*self.directors.length)];
                        }
    
                        // Randomize location of the correct answer
                        self.randomizeAnswers(self.correctAnswer,self.anotherAnswer);
    
                    }
    
                    else {
    
                        // Get movie's genres
                        movie.getMovieCategories({movieId: self.movie.id}).$promise.then(function(cat) {
                            
                            self.movieCategories = self.getCategoryNames(cat);
    
                            // Get correct answer (movie director)
                            self.correctAnswer = self.movieCategories[Math.floor(Math.random()*self.movieCategories.length)];
    
                            // The question
                            self.questionText = "What genre is '" + self.movie.title + "'?";
    
                            // Find another random answer
                            //self.anotherAnswer = self.categoryNames[Math.floor(Math.random()*self.categoryNames.length)];
                            self.anotherAnswer = self.correctAnswer;
                            while (self.movieCategories.includes(self.anotherAnswer)) {
                                self.anotherAnswer = self.categoryNames[Math.floor(Math.random()*self.categoryNames.length)];
                            }
    
                            // Randomize location of the correct answer
                            self.randomizeAnswers(self.correctAnswer,self.anotherAnswer);
    
                        });
    
                    }
                        
                });
            }
    
            else {
    
                actor.getAll().$promise.then(function(data) {
    
                    // All the actors
                    self.actors = data;
    
                    self.actorsNames = self.getActorNames(self.actors);
    
                    // Some random actor
                    self.actor = self.actors[Math.floor(Math.random()*self.actors.length)];
    
                    // Get correct answer
                    self.correctAnswer = self.getActorNames([self.actor]).toString();
    
                    // The question
                    self.questionText = "Who is this?";
    
                    // Actor picture
                    self.actorPicture = self.actor.picture_url;
                    self.isPicture = true;
                    
                    // Find another random answer
                    self.anotherAnswer = self.actorsNames[Math.floor(Math.random()*self.actorsNames.length)];
                    while (self.anotherAnswer == self.correctAnswer) {
                        self.anotherAnswer = self.actorsNames[Math.floor(Math.random()*self.actorsNames.length)];
                    }
    
                    // Randomize location of the correct answer
                    self.randomizeAnswers(self.correctAnswer,self.anotherAnswer);
    
                });
    
            }

        };

        // Get 1st question
        self.getQuestion();

        // Answer selection
        $scope.selectAnswer = function(chosenAnswer) {
            self.isDisplayedIcon = true;
            self.btn1 = self.btn1Final;
            self.btn2 = self.btn2Final;

            if (chosenAnswer == self.correctAnswer) {
                self.ans = "Correct!";
                self.score++;
            }
            else {
                self.ans = "Incorrect!";
            }

            // Wait for 2 seconds
            window.setTimeout(function() {

                // Reset button style and message display
                self.isDisplayedIcon = false;
                self.btn1 = "outline-dark";
                self.btn2 = "outline-dark";
                self.ans = null;

                // Get next question
                self.getQuestion();
            }, 2000);
        };

      }
    ]
  });
