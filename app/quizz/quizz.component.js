'use strict';

angular.
  module('quizz').
  component('quizz', {
    templateUrl: 'quizz/quizz.template.html',
    controller: ['movie', '$scope',
      function quizzController(movie, $scope) {
        
        var self = this;

        // Initial values
        self.isDisplayedIcon = false;
        self.btn1 = "outline-dark";
        self.btn2 = "outline-dark";
        
        movie.getAll().$promise.then(function(data) {
            
            
            
            self.movies = data;    
            self.directors = [];

            for (var myMovie of self.movies) {
                if (self.directors.filter(function(e) { return e == myMovie.director; }).length == 0) {
                    self.directors.push(myMovie.director);
                }
            }
            
            // Get a random movie
            self.movie = self.movies[Math.floor(Math.random()*self.movies.length)];

            // Get correct answer
            self.correctAnswer = self.movie.director;

            // The question
            self.questionText = "Who directed '" + self.movie.title + "'?";
            
            // Find another random director
            self.anotherAnswer = self.directors[Math.floor(Math.random()*self.directors.length)];
            while (self.anotherAnswer == self.correctAnswer) {
                self.anotherAnswer = self.directors[Math.floor(Math.random()*self.directors.length)];
            }

            if (Math.random()>0.5) {
                self.answer1 = self.correctAnswer;
                self.answer2 = self.anotherAnswer;
                self.icon1 = "check";
                self.icon2 = "close";
                self.btn1Final = "success";
                self.btn2Final = "danger";
            }
            else {
                self.answer1 = self.anotherAnswer;
                self.answer2 = self.correctAnswer;
                self.icon1 = "close";
                self.icon2 = "check";
                self.btn1Final = "danger";
                self.btn2Final = "success";
            }

        });

        $scope.displayIcon = function(chosenAnswer) {
            self.isDisplayedIcon = true;
            self.btn1 = self.btn1Final;
            self.btn2 = self.btn2Final;

            if (chosenAnswer == self.correctAnswer) {
                self.ans = "Correct!";
            }
            else {
                self.ans = "Incorrect!"
            }

            // Your application has indicated there's an error
            window.setTimeout(function(){

                // Move to a new location or you can do something else
                window.location.href = "#!/quizz/";

            }, 2000);
        };


      }
    ]
  });
