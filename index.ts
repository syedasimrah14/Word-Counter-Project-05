#! /usr/bin/env node

import inquirer from "inquirer"

let userInput = await inquirer.prompt(
    [
        {
            name: "sentence",
            message: "Please enter your sentence to count the word ",
            type: "input",
        }
    ],
)

const words = userInput.sentence.trim().split(" ") 
//"trim" > removes whitespaces from start and  end & "split" >  converts the words/elements sequenctially in an array(method)

console.log(words)
console.log(`your sentence word count is ${words.length}`)

const characters = userInput.sentence.split("")
console.log(`Total characters used in your sentence are ${characters.length}.`)

