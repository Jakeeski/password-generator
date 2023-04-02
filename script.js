// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var special =  [ "!", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ]
var temporaryPassword= ""
var password = ""


function generatePassword() {
  var passwordLength = prompt("How long do you want your password?(Between 8-128 Characters");
  if(passwordLength < 8){
    alert("Must be at least 8 characters long")
    return null;
  }
  if(passwordLength > 128) {
    alert("Must be less than 128 characters")
    return null;
  }
   
  var lowercaseCharacters = confirm("Would you like lowercase characters?");
  
  if(lowercaseCharacters){
    temporaryPassword+=lowercase;
  }

  var uppercaseCharacters = confirm("Would you like uppercase characters?");

  if(uppercaseCharacters){
    temporaryPassword+=uppercase;
  }

  var numericCharacters = confirm("Would you like numeric characters?");
  
  if(numericCharacters){
    temporaryPassword+=numeric;
  }
  
  var specialCharacters = confirm("Would you like special characters?");
  
  if(specialCharacters){
    temporaryPassword+=special;
  }
  
  for (var i = 0; i < passwordLength; i++) {
    password += temporaryPassword.charAt(Math.floor(Math.random() * temporaryPassword.length));
  }

return password;



}


