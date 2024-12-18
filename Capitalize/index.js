const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizeWords(inputString) {
    // Split the string into words
    let words = inputString.split(" ");
    // Capitalize the first letter of each word
    let capitalizedWords = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    );
    // Join the words back into a single string
    return capitalizedWords.join(" ");
}

// Prompt the user for input
rl.question("Enter a string: ", (userInput) => {
    let result = capitalizeWords(userInput);
    console.log("Capitalized String: " + result);
    // Close the readline interface
    rl.close();
});


