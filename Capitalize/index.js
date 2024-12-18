const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizeWords(inputString) {

    let words = inputString.split(" ");
    let capitalizedWords = words.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
}

rl.question("Enter a string: ", (userInput) => {
    let result = capitalizeWords(userInput);
    console.log("Capitalized String: " + result);
    rl.close();
});


