#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.hex("	3CB371").bold`\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);

console.log(chalk.hex("98FB98").bold`\n \t================= TYPESCRIPT QUIZZ-APP ==================`);

console.log(chalk.hex("	3CB371").bold`\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);

console.log(chalk.hex("DAA520").bold`\n \t -------------------- COUNT YOUR SCORE --------------------`);

console.log(chalk.hex("D2691E").bold`\n You will get 10 points for each correct answer at the end of the quizz.`);

// ---------------- Start ---------------------

// ask user informaition using inquirer...
let userinfo = await inquirer.prompt([
  {
    name: "useremail",
    type: "input",
    message: chalk.hex("7B68EE")("\nEnter your email"),
  },
  {
    name: "username",
    type: "input",
    message: chalk.hex("7B68EE")("\nEnter your good name"),
  },
]);

console.log(chalk.magenta.bold(`\n WELCOME ${userinfo.username}! let's test your TypeScript skill with this quizz.`));

// ---------------- End ---------------------

// ---------------- Start ---------------------

// making quizz question here....

console.log(chalk.hex("FF7F50").bold`\n \t \t ================= START THE QUIZZ ==================`);

let userQuestions = await inquirer.prompt([
  {
    name: "question1",
    type: "list",
    message: chalk.green.bold("\n Q1. What does JSON stand for?"),
    choices: [
      chalk.yellow("i) JavaScript Object Notation"),
      chalk.yellow("ii) JavaScript Object Naming"),
      chalk.yellow("iii) JavaScript Odered Notation"),
      chalk.yellow("iv) JavaScript Object Network"),
    ],
  },

  {
    name: "question2",
    type: "list",
    message: chalk.green.bold("\n Q2.  Select valid variable?"),
    choices: [
      chalk.yellow("i) let @num = 2"),
      chalk.yellow("ii) let $num = 2"),
      chalk.yellow("iii) num# = 2"),
      chalk.yellow("iv) let my num = 2"),
    ],
  },
  {
    name: "question3",
    type: "list",
    message: chalk.green.bold("\n Q3. An array can contain?"),
    choices: [
        chalk.yellow("i) number"),
         chalk.yellow("ii) string"), 
         chalk.yellow("iii) boolean"), 
         chalk.yellow("iv) all of these")
        ],
  },
  {
    name: "question4",
    type: "list",
    message: chalk.green.bold("\n Q4  What is the result of myArray.push(3) if myArray is an array with one element TypeScrip"),
    choices: [
        chalk.yellow("i) [2,3]"),
         chalk.yellow("ii) [2,1,2]"), 
         chalk.yellow("iii) [3,2]"), 
         chalk.yellow("iv) [1,2,1]"),
        ],
  },
  {
    name: "question5",
    type: "list",
    message: chalk.green.bold("\n Q5. What type of assignment is this variable? \n `const fullName:string = Quaid-e-azam"),
    choices: [
        chalk.yellow("i) Implicit"),
         chalk.yellow("ii) Explicit"),
        ],
  },

  {
    name: "question6",
    type: "list",
    message: chalk.green.bold("\n Q6. console.log(typeof null)"),
    choices: [
        chalk.yellow("i) null"),
         chalk.yellow("ii) undefined"), 
         chalk.yellow("iii) object"),
          chalk.yellow("iv) NAN"),
        ],
  },

  {
    name: "question7",
    type: "list",
    message:chalk.green.bold("\n Q7. Which of the followings are primitive types supported in TypeScript"),
    choices: [
      chalk.yellow("i) number"),
      chalk.yellow("ii) string"),
      chalk.yellow("iii) boolean"),
      chalk.yellow("iv) all of the above"),
    ],
  },

  {
    name: "question8",
    type: "list",
    message: chalk.green.bold("\n Q8. TypeScript file compile into"),
    choices: [
      chalk.yellow("i) VBScript"),
      chalk.yellow("ii) JavaScript"),
      chalk.yellow("iii) TypeScript"),
      chalk.yellow("iv) None of these"),
    ],
  },

  {
    name: "question9",
    type: "list",
    message:chalk.green.bold.bold("\n Q9. Which command is used to generate a JavaScript file from a TypeScript"),
    choices: [
      chalk.yellow("i) tsc filename.ts"),
      chalk.yellow("ii) npm filename.ts"),
      chalk.yellow("iii) tsc -js filename.ts"),
      chalk.yellow("iv) all of the above"),
    ],
  },

  {
    name: "question10",
    type: "list",
    message:chalk.green("\n Q10. Which of the following keyword is used to declare a module"),
    choices: [
        chalk.yellow("i) type"), 
        chalk.yellow("ii) namespace"), 
        chalk.yellow("iii) export"), 
        chalk.yellow("iv) declare"),
    ],
  },
]);

// here we will be destruccturing the questions...
const {question1,question2,question3,question4,question5,question6,question7,question8,question9,question10} = userQuestions;

// here is array of the correct option of questions....

let correct_option = [chalk.yellow("i) JavaScript Object Notation"),chalk.yellow("ii) let $num = 2"),
chalk.yellow("iv) all of these"),chalk.yellow("i) [2,3]"), chalk.yellow("ii) Explicit"),chalk.yellow("iii) object"),
chalk.yellow("iv) all of the above"),chalk.yellow("i) tsc filename.ts"),chalk.yellow("i) tsc filename.ts"),
chalk.yellow("iii) export"),];

// declare the vaiable of score...
let score: number = 0;

// use the conditional statement to chek the condition...
if (question1 === chalk.yellow("i) JavaScript Object Notation")) {
  score += 10;
}
if (question2 === chalk.yellow("ii) let $num = 2")) {
  score += 10;
}
if (question3 === chalk.yellow("iv) all of these")) {
  score += 10;
}
if (question4 === chalk.yellow("i) [2,3]")) {
  score += 10;
}
if (question5 === chalk.yellow("ii) Explicit")) {
  score += 10;
}
if (question6 === chalk.yellow("iii) object")) {
  score += 10;
}
if (question7 === chalk.yellow("iv) all of the above")) {
  score += 10;
}
if (question8 ===  chalk.yellow("ii) JavaScript")) {
  score += 10;
}
if (question9 === chalk.yellow("i) tsc filename.ts")) {
  score += 10;
}
if (question10 === chalk.yellow("iii) export")) {
  score += 10;
}

//console.log(score);
// here define the  function of viewscore...
async function viewScore() {
  const viewscore = await inquirer.prompt({
    name: "userscore",
    type: "confirm",
    message: chalk.green("View score?"),
  });
  if (viewscore.userscore) {
    if (score == 100) {


      console.log(chalk.blue.bold(`\n Congratulation! ${userinfo.username} your score is  ${score} out of ${score}`));
      
      
      //console.log(chalk.hex('DC143C')`\n Congratulation! ${userinfo.username} your score is  ${score} out of ${score} `);
    } else if (score > 0) {
      console.log(chalk.yellow.bold(`\n Hey ${userinfo.username}! good effeort  you got ${score} score out of 100`));
    } else {
      console.log(chalk.red.bold(`\n Better luck next time ${userinfo.username}! you got ${score} score out of 100`));
    }
    let correct_answer = await inquirer.prompt({
      name: "correctans",
      type: "confirm",
      message: chalk.green("\n Would you like to see correct answer?"),
      default: true,
    });
    if (correct_answer.correctans === true) {
    console.log(chalk.green(`\n Here are the correct answer of the questions..`));
    //console.log(chalk.green(`\n ${correct_answer.correctans}`));
    console.log(chalk.yellow(`\n${correct_option}`));
  
    }
  }

  //  Print thank you message..
  console.log(chalk.hex('DAA520')`\n \t \t xxxxxxxxxxxxxxxxxxxxx Thank You For Using This TypeScript-Quizz-App xxxxxxxxxxxxxxxxxxxxx `);
}

//here calling the function....
viewScore();
