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
  var passwordLength = prompt("How long do you want your password?(Between 8-128 Characters)");
  console.log(passwordLength);
  //This will make sure the user is inputing a value between 8-128, and is a number.
  if(passwordLength <= 7 || passwordLength >= 129 || isNaN(passwordLength)){
    alert("Must be between 8 and 128 characters")
    generatePassword();
  }
  var lowercaseCharacters = confirm("Would you like lowercase characters?");
  //This is where the user chooses if they want Lowercase letters
  if(lowercaseCharacters){
    temporaryPassword+=lowercase;
  }
  //If lowercase is selected, temporaryPassword stores the choice.. Same for all below.
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



