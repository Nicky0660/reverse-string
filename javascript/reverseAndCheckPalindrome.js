//create a CLI where a user is asked for an original string
//runs it through the created function reverseString and isPalindrome 
//the program reverses the string and tells you if it is a palindrome
//allows the user to test more than one string at a time by not closing the CLI


const readline = require('readline');
const { reverseString, isPalindrome } = require('./reverse_string');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function handleInput() {
    r1.question("Ready to reverse string.\nInput your string here: ", function (originalString) {
        let reversedStr = reverseString(originalString)
        console.log(`Here is your reversed string: ${reversedStr}`);
        if (isPalindrome(reversedStr)) {
            console.log('palindrome')
        } else {
            console.log("It is not a palindrome")
        }

        r1.question("Do you want to continue (Y/N)? ", function (answer) {
            if (answer.toLowerCase() === 'y') {
                handleInput();
            } else {
                rl.close();
            }
        })
    })
}

handleInput()