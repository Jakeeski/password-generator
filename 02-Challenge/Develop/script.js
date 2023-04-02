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
var uppercase = ""
var numeric = ""
var specialCharacters = ""
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
  console.log(passwordLength);
  var lowercaseCharacters = confirm("Would you like lowercase characters?");
  console.log(lowercaseCharacters);
  if(lowercaseCharacters){
    temporaryPassword+=lowercase;
  }
  console.log(temporaryPassword);

  for (var i = 0; i < passwordLength; i++) {
    password += temporaryPassword.charAt(Math.floor(Math.random() * temporaryPassword.length));
  }

return password;



}


