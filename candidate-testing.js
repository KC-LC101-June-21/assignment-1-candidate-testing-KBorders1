const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 +3 )/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2? ", "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let candidateAnswer;
let correctAnswer;
let candidateAnswers = [];


function compareAnswers(candidateAnswers, correctAnswers) {
  let correct = 0;
  for  (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correct += 1;
    }
  }
  return correct;
}

function grading(number) {
   return ((number / 5) * 100);
}


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
   candidateName = input.question("Enter your name... ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++)
  {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }


}


function gradeQuiz(candidateAnswers) {

function compareAnswers(candidateAnswers, correctAnswers) {
  let correct = 0;
  for  (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correct += 1;
    }
  }
  return correct;
}

function grading(number) {
   return ((number / 5) * 100);
}

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log("Candidate Name: " + candidateName);
  
for (let i = 0; i < questions.length; i++) {
  console.log(`${i+1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`);
}

let amountRight = compareAnswers(candidateAnswers, correctAnswers);
let grade = grading(amountRight);

console.log(`>>> Overall Grade: ${grade}% (${amountRight} of 5 responses correct) <<<`);
if (grade === 80 || grade === 100) {
  console.log(`>>> Status: PASSED <<<`);
} else {
  console.log(`>>> Status: FAILED <<<`);
}


}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name: " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};