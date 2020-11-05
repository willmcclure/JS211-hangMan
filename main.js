// Hang Man - Instructions

// Hangman word
let word = "Hello"

// Split word into an array of letters
let array = word.split('')

// take the user's input 
let input = "";

// set an empty array for hints
let hint = []

// push underscores to empty array 

let blank = () => {
    for(i=0; i < array.length; i++){
        hint.push("_")
    } return array
}

let checkForWin = (input) => {
    let hasLetter = array.includes(input);

    if (hasLetter){
        for(i = 0; i < array.length; i++)
            if (array[i] === input){
                hint[i] = array[i];
                guess = hint.join('')
            }
    } if (input == word){
        console.log("You have conquered hangman!")
        return
    }
    console.log("Your guess is currently", input)
}

blank(array)
checkForWin("t")
checkForWin("e")
checkForWin("a")
checkForWin("l")
checkForWin("h")
checkForWin("o")

