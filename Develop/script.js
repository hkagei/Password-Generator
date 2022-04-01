var generateBtn = document.querySelector("#generate");

const specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"]
console.log(specialCharacters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");
    var numbers = confirm("Do you want numbers in your password?");
    var lowerCases = confirm("Do you want lowercases in your password?");
    var upperCases = confirm("Do you want uppercases in your password?");
    var special = confirm("Do you want special characters in your password?")
  for (var i = 0; i <= passwordLength; i++){
    var minimumCount = 0;
    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSpecialCharacters = "";
  }
  document.getElementById("password").value = password;{
    var functionArray = {
      getNumbers: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      },
  
      getLowerCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      },
  
      getUpperCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      },
  
      getSpecialCharacters: function() {
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      }
  
  };
    
    if (numbers === true) {
      minimumNumbers = functionArray.getNumbers();
      minimumCount++;
  
    } else {
      minimumLowerCases = functionArray.getLowerCases();
      minimumUpperCases = functionArray.getUpperCases();
      minimumSpecialCharacters = functionArray.getSpecialCharacters();

    }
  
    if (lowerCases === true) {
      minimumLowerCases = functionArray.getLowerCases();
      minimumCount++;
  
    } else {
      minimumNumbers = functionArray.getNumbers();
      minimumUpperCases = functionArray.getUpperCases();
      minimumSpecialCharacters = functionArray.getSpecialCharacters();

    }
  
    if (upperCases === true) {
      minimumUpperCases = functionArray.getUpperCases();
      minimumCount++;
  
    } else {
      minimumNumbers = functionArray.getNumbers();
      minimumLowerCases = functionArray.getLowerCases();
      minimumSpecialCharacters = functionArray.getSpecialCharacters();

    }
  
    if (special === true) {
      minimumSpecialCharacters = functionArray.getSpecialCharacters();
      minimumCount++;
  
    } else {
      minimumLowerCases = functionArray.getLowerCases();
      minimumUpperCases = functionArray.getUpperCases();
      minimumNumbers = functionArray.getNumbers();


    }
  
  
    var randomPasswordGenerated = "";
  
    for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
      var randomNumberPicked = Math.floor(Math.random() * 10);
  
      randomPasswordGenerated += randomNumberPicked;
  
    }
  
    
    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSpecialCharacters;
  
  
    return randomPasswordGenerated;
  
  }}
  generateBtn.addEventListener("click", writePassword);
