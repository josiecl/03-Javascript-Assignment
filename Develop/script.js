// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for the prompts
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var capitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var undercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolic = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "?"];

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




//generator for 

// function getRandom(array) {
//   var randomIndex = Math.floor(Math.random() * array.length);
//   var randomCharacter = array[randomIndex];
//   console.log(randomCharacter);
//   return randomCharacter;
// }

// Function to generate the password
function generatePassword() {
  var options = getOptions();
  var possibleCharacters = [];
  var result = [];

  
 

  if (options.uppercase) {
    for(var i = 0; i < capitals.length; i++) {
      possibleCharacters.push(capitals[i]);
    }

  };

  if (options.lowercase) {
    for(var i = 0; i < undercase.length; i++) {
      possibleCharacters.push(undercase[i]);
    }

  };

  if (options.numbers) {
    for(var i = 0; i < numeric.length; i++) {
      possibleCharacters.push(numeric[i]);
    }
    // console.log(possibleCharacters);
  };

  if (options.symbols) {
    for(var i = 0; i < symbolic.length; i++) {
      possibleCharacters.push(symbolic[i]);
    }

  }

  var newPassword = "";

  for(var i = 0; i < options.length; i++) {

    newPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    // console.log(newPassword);


    // var possibleCharacter = getRandom(possibleCharacters);
    // result.push(possibleCharacter);
    // console.log(result);
  }

  return newPassword

  


  //create for loop to choose password characters

  // for(var i = 0; i <= length; i++){
  //   password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
  //   console.log(password);
  // }

  // return(password);

  // document.getElementById("returnPassword").textContent = password;
}





// function to ask all the prompt questions, then retrieve selected answers and push them to the output
function getOptions() {

  // Running into issues if length < 8 and if length is near 128.. 
  var length = prompt("Between 8 to 128, how many characters?");
  if (length < 8) {
    alert("Error: must be at least 8 characters");
    getOptions();
  }
  if (length > 128) {
    alert("Error: must be at most 128 characters");
    getOptions();
  }


  // Variables for the prompts
  var uppercase = confirm("Use uppercase letters?")
  var lowercase = confirm("Use lowercase letters?")
  var numbers = confirm("Use numbers?")
  var symbols = confirm("Use the following symbols: !@#$%^&*()-_=?")

  // Tell the user that they must use at least one prompt
  if(uppercase === false && symbols === false && numbers === false && lowercase === false) {
    alert("Must choose at least one parameter");
    getOptions();
  }
  else {
    var passwordOptions = {
      length: length, 
      uppercase: uppercase,
      lowercase: lowercase,
      numbers: numbers,
      symbols: symbols
    }

    return passwordOptions
  }




  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
