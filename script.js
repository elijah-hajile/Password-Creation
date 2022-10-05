// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateRandomList(max, min) {
  var options = Math.floor((Math.random()*max - min)+min);
  options.push(List);
  console.log(options);
}

function generatePassword() {
  var input = prompt();
  var passwordlength = (input);

  var userNumeric = prompt ("Password Needs to Contain Numbers");
  var numericList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var userSymbol = prompt ("Password Needs to Contain At Least One Symbol");
  var symbolList = ["!", "@", "#", "$", "%", "&", "+"];

  var userUppercase = prompt ("Passwords Needs to Contain At least one Uppercase");
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
  "O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var userLowercase = prompt ("Password Needs to Contain At least one Lowercase");
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  if (userNumeric === true)
  console.log(numericList);

  if (userSymbol === true)
  console.log(symbolList);

  if (userUppercase === true)
  console.log(uppercaseList);

  if (userLowercase === true)
  console.log(lowercaseList);

  var options = []

  for (var i = 0; i < passwordlength; i++) {
    var generateRandomList = generateRandomChar(options);
    var generateRandomChar = randomList(generateRandomList);
    console.log(generateRandomChar);
  }
  
  prompt("Password Length Needs to be at least 8 Characters");

  if (passwordlength < 8 || passwordlength > 128)
  console.log("Password Length Needs to be Between 8 and 128 Characters");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  document.getElementById("password").innerHTML = "Generate a Password";
