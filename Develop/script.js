// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//generator for password
function generatePassword() {
  let complexity = document.getElementById("generate").value;

  var length = prompt("Between 8 to 128, how many characters?");
  if (length < 8) {
    alert("Error");
  }
  if (length > 128) {
    alert("Error");
  }

  //possible password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=";

  let password = "";

  //create for loop to choose password characters
  for(var i = 0; i <= length; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
    console.log(password);
  }

  return(password);
  // document.getElementById("returnPassword").textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
