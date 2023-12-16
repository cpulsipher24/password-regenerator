// Assignment code here

// Function to generate a random password based on user criteria
function generatePassword() {
  // Define arrays for different character types
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Prompt user for password length
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return ""; // Return an empty string if the length is invalid
  }

  // Prompt user for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("Please select at least one character type.");
    return ""; // Return an empty string if no character type is selected
  }
  
  // Build the character pool based on user's choices
  var charPool = "";
  if (includeLowercase) charPool += lowercaseChars;
  if (includeUppercase) charPool += uppercaseChars;
  if (includeNumeric) charPool += numericChars;
  if (includeSpecial) charPool += specialChars;

    // Generate the password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool.charAt(randomIndex);
    }
  }
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
