#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is: ${words.length} `);
