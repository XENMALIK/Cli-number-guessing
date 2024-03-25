#! /usr/bin/env node
import inquirer from "inquirer";

//computer will generate a random number
//user input guessing number
//compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message : "please guess a number 1 to 6:"
    }
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed a right number")
}else{
    console.log("you guessed a wrong number")
}