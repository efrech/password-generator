
 // Arrays for special characters, lowercase letters, uppercase letters, and numbers
 var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
 var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//global variables
var userChoices = {
  lengthChoice: 0,
  useSpecialChar: false,
  useNumberChar: false,
  useUpperChar: false,
  useLowerChar: false
}

//function to get the password options selected by the user
  //error handling for amount of characters in password
  //confirmation for user choices through confirm method
  //if statement for the user choosing "no" throughout the selection
  //object to store all the user choices
  //return object
function userSelected () {
  userChoices['lengthChoice'] = window.prompt("How many characters would you like your password to contain?");
    if (userChoices['lengthChoice'] < 7 && userChoices['lengthChoice'] > 129) {
      window.alert("Password must be 8 characters minimun and 128 maximun");
    } else {
        console.log(userChoices);
        userChoices['useSpecialChar'] = window.confirm("Would you like to include special characters in your password?");
        console.log(userChoices);
        userChoices['useNumberChar'] = window.confirm("Would you like to include numbers in your password?");
        console.log(userChoices);
        userChoices['useUpperChar'] = window.confirm("Would you like to include uppercases in your password?");
        console.log(userChoices);
        userChoices['useLowerChar'] = window.confirm("Would you like to include uppercases in your password?");
        console.log(userChoices);
      };
} //I'm missing the array to colect user's picks

//need an array to randomly select elements from user's options
function randomSelected(randomizeArr) {
  var userChoices = array[Math.floor(math.random() * array.lengthChoice)]
  //use math.floor to select random choice within the choice array
  //choose random characters in the array
  //return the random element
}

//function to generate the password from user's input
function generatePassword() {
  //create an empty variable to store the concatenated password
  //create an empty variable holding all possible password choices
  //create an empty variable to hold the chosen characters
  //error handling to see if the object with your choices exists or not
  
  //conditional statement are needed to add if the user has chosen special characters into an array of pissble characters and must push new random characters to chosen array
  if (condition) {
  }
  //iterate over the password lenght from the choice made (obj), selecting random indexes from the array of possible characters and puts them into a result variable
  for (let index = 0; index < Array.length; index++) {
    const element = array[index];
  }
  // combine the results and send them to the writePassword function to present on the page
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompts for password criteria 1. password length between 8 to 128 characters. 2. characters types: LowersCase, UpperCase, Numeric, and/or Special Characters
userSelected()