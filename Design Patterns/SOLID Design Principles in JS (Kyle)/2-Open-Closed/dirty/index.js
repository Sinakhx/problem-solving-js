function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1, True");
        console.log("2, False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: _____________");
        break;
      case "range":
        console.log("Minimum: _____________");
        console.log("Maximum: _____________");
        break;
    }
    console.log("");
  });
}

const questions = [
  {
    type: "boolean",
    description: "This video is useful.",
  },
  {
    type: "multipleChoice",
    description: "What is your favorite language?",
    options: ["CSS", "HTML", "JS", "Python"],
  },
  {
    type: "text",
    description: "Describe your favorite JS feature",
  },
  {
    type: "range",
    description: "What is the speed limit in your city?",
  },
];

printQuiz(questions);
