var generateBtn = document.querySelector("#generate");

const specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");
   // make condition to recall "generatePassword" if numbers are out of bounds. (use "return" to stop function execution)
   if(passwordLength >= 8 && passwordLength <= 128){
  // do nothing
   } else {
     return generatePassword()
   }
    var numbers = confirm("Do you want numbers in your password?");
    var lowerCases = confirm("Do you want lowercases in your password?");
    var upperCases = confirm("Do you want uppercases in your password?");
    var special = confirm("Do you want special characters in your password?")
  
  document.getElementById("password").value = password;
  
    
  
  
    
    var functionOBJ = {} //
    // actions based on user choices (if true, allow criteria)

  
  if(numbers) {
    functionOBJ.numbers = function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      } //
  }
  
  if (lowerCases) {
    functionOBJ.lowerCases = function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    } //
  }

  if (upperCases) {
    functionOBJ.upperCases = function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    } //
  }

  if (special) {
    functionOBJ.special = function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    } //
  }
  
  var optionsArray = Object.keys(functionOBJ) // 
  
  
    var randomPasswordGenerated = "";
    for (var i = 0; i <= passwordLength; i++){
      var randomNumberPicked = Math.floor(Math.random() * optionsArray.length); //
      var option = optionsArray[randomNumberPicked] //
      
  
  
      randomPasswordGenerated += functionOBJ[option](); //
    }
    
  
    
    
  
  
    return randomPasswordGenerated;
  
  
}
  generateBtn.addEventListener("click", writePassword);
