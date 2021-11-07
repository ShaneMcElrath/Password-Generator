// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength;
var choiceLowerCase;
var choiceUpperCase;
var choiceNum;
var choiceSpecial;


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

//Asks the user what character types they want in there password and how long they want the password.
//and checks to make sure user input is valid. If the input is not valid it will alert them and let them try again.
var passCriteriaPromt = function(userinput, numOrYN, charSet) {

  while(numOrYN === "YN") {

    userinput = window.prompt('Do you want ' + charSet + ' in your password? (Y/N)');
    

    if (userinput === "Y" || userinput === "N" || userinput === "y" || userinput === "n") {
      return userinput.toLowerCase();
    }
    else {
      window.alert('Invalid input try again');
    }
  }

  while(numOrYN === "Num") {

    userinput = window.prompt('How long do you want your password to be? (8 to 128)')

    if (userinput >= 8 && userinput <= 128) {
      return userinput;
    }
    else {
      window.alert('Invalid input try again')
    }
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);