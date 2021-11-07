// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// creates a random number with in a specified range.
var randomNumberRange = function(min, max) {
  var intRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return intRandom;
}

//Creates random lower case letter.
var lowerCaseRandom = function() {
  var intRandom = randomNumberRange(97, 122);
  return String.fromCharCode(intRandom);
}

//Creates random upper case letter.
var upperCaseRandom = function() {
  var intRandom = randomNumberRange(65, 90);
  return String.fromCharCode(intRandom);
}

//Creates random number between 0 and 9;
var numberRandom = function() {
  var intRandom = randomNumberRange(0, 9);
  return intRandom;
}

//Creates random special character.
var specialCharacterRandom = function() {

  var intRandom = randomNumberRange(0, 3);

  switch (intRandom) {
    case 0:
      intRandom = randomNumberRange(32, 47);
      break;
    case 1:
      intRandom = randomNumberRange(58, 64);
      break;
    case 2:
      intRandom = randomNumberRange(91, 96);
      break;
    case 3:
      intRandom = randomNumberRange(123, 126);
      break;
  }

  return String.fromCharCode(intRandom);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);