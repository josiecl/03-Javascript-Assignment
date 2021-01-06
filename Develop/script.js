// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generator for password
function generate() {
  let complexity = document.getElementById("generate").value;

  //possible password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=";

  let password = "";

  //create for loop to choose password characters
  for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  document.getElementById("display").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
