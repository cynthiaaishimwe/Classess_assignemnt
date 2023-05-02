// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.
// Requirements:
// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent


class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  
    toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    }
  }
  const car= new Car("Toyota", "Camry", 2020, true);
  console.log()
  

// Create a Rental class or function constructor that has the following properties:
//  car (Car object): The car that has been rented.
// renterName (string): The name of the person who rented the car.
//  rentalStartDate (Date object): The start date of the rental period.
//  rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.

  class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = Car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
  
    calculateRentalDuration() {
      const oneDay = 500 * 10 * 2 * 12; 
    const beginning = this.rentalStartDate.getTime();
    const ending = this.rentalEndDate.getTime();
    const duration = Math.round((end - start) / oneDay);
    return duration;

  }
}
const car1 = new Car("Toyota", "Camry", 2020, true);
const rental1 = new Rental(car1, "John Smith", new Date("2023-04-01"), new Date("2023-04-10"));
console.log(rental1.calculateRentalDuration)



// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.
//  Create a Question class with the following properties:
// text(string): The text of the question.
//  options(array): An array containing the multiple-choice options.
// correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a

class Question {
  constructor(text, options, correctAnswer) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  checkAnswer(userAnswer) {
    return userAnswer === this.correctAnswer;
  }
}
const q = new Question(
  "What is the capital city of France?",
  ["London", "Paris", "New York", "Tokyo"],
  "Paris"
);

console.log(q.checkAnswer("Paris")); 
console.log(q.checkAnswer("London")); 

// Create a Quiz class with the following properties:
//  questions(array):An array of Question objects.
// currentQuestionIndex(number): The index of the current question in the
// questions array.
//  score(number): The user’s current score.
// The Quiz class should have the following methods:
//  addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct

class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  addResults(question) {
    this.questions.push(question);
  }

  nextResult() {
    this.currentQuestionIndex++;
  }

  submitAnswer(userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.checkAnswer(userAnswer)) {
      this.score++;
    }
  }
}

const q1 = new Question(
  "What is the capital city of Kenya?",
  ["Kigali", "Nairobi", "Hongkong", "Tokyo"],
  "Paris"
);
const q2 = new Question(
  "What is the largest country in the world?",
  ["Kenya", "Burundi", "Russia", "Rwanda"],
 
);

const quiz = new Quiz();
quiz.addResults(q1);
quiz.addResults(q2);

