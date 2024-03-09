//Define a function called reverseString that takes a single parameter, str.
//Initialize an empty string called reversedStr to store the reversed string.
// Iterate over the characters of the input string str in reverse order:
  //Start a loop from the last character (str.length -1) and end at the first character (index 0)
  // append each character to the reversedStr variable
//add a check to see if the input str is identical to reversedStr
  //This would be a palindrome
  //if they do not === eachother it is NOT a palindrome
//return the reversedStr variable containing the reversed string 
//add test cases to verify the correctness of the function.



function reverseString(str) {



  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
  return reversedStr;
}

function isPalindrome(str){
  const modifiedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return modifiedStr === reverseString(modifiedStr);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting:'level'");
  console.log("=>", reverseString("level"))



  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = {reverseString, isPalindrome};

// Please add your pseudocode to this file
// And a written explanation of your solution

