var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var concatArr = [];
var lengthChoice = 0;

function userSelection() {
  lengthChoice = window.prompt("How many characters would you like your password to contain?");
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Password must be 8 characters minimun and 128 maximun");
  } else {
    if (window.confirm("Would you like to include special characters in your password?")){
      concatArr = concatArr.concat(specialChars);
    };
    if (window.confirm("Would you like to include numbers in your password?")) {
      concatArr = concatArr.concat(numberChars)
    };
    if (window.confirm("Would you like to include uppercases in your password?")) {
      concatArr = concatArr.concat(upperCase)
    };
    if (window.confirm("Would you like to include lowercases in your password?")) {
      concatArr = concatArr.concat(lowerCase)
    };
  };
}

function randomSelected() {
  return concatArr[Math.floor(Math.random() * concatArr.length)]
}

function generatePassword() {
  let generatedPassword = "";
  for (let index = 0; index < lengthChoice; index++) {
    generatedPassword = generatedPassword + randomSelected();
  } 
  return generatedPassword;
}

function writePassword() {
  concatArr = [];
  
  userSelection();
  
  if (concatArr.length > 0) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);