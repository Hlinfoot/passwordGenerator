// Assignment Code
// var generateBtn = document.getElementById("#generate");
var lengthEl = document.querySelector("#length");
var uppercaseEl = document.querySelector("#uppercase");
var lowercaseEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");
var generateEl = document.querySelector("#generate");
var clipboardEl = document.querySelector("#clipboard");
var resultEl = document.querySelector("#result")
// Add event listener to generate button

generateEl.addEventListener("click", function() {
  var length = lengthEl.value;
  var hasUpper = uppercaseEl.checked;
  var hasNumbers = numbersEl.checked;
  var hasLower = lowercaseEl.checked;
  var hasSymbols = symbolsEl.checked;
  

  resultEl.innertext = generatePassword(
    hasLower,
    hasUpper, 
    hasNumbers, 
    hasSymbols, 
    length
    ); 
});

function generatePassword(lower, upper, number, symbol, length) {
  var generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0])

  if (typesCount === 0) {
    return "";
  }

  for ( var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += randomGen[funcName]();
    });
  }
  var finalPassword = generatedPassword.slice(0, length);
  return finalPassword;

}

//will create an object with all made random generator functions
var randomGen = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

//This will create and name three functions that will grab a random character from the object .fromCharCode
// function declares the following is a function
//getRandomLower, getRandomUpper, and getRandomNumber is the name of the functions
//() declares that it will be a function
//return will give be what the function gives when it is called
//String declares that what it will return will be a string (name, letters, etc)
// fromCharCode declares which object the function will pull from
//Math.floor will round the output down to the nearest whole number
//Math.random will make the output a random number
// * 26 will make the random number pick a number 1-26
// + 97 will make the random number start at the 97th place of the object

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
 function getRandomUpper () {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol () {
  var symbols = ["!@#$%^&*(){}[]=+<>?.,"]
  return symbols [Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomNumber()) 
// uncomment to test functions in console. Name function accordingly


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;



