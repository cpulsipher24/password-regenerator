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
