// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to write password to the #password input
function writePassword() {
  
  // Prompt for password length
  var passwordLength = prompt("Choose a password length between 8 and 128 characters:");
  
  // Validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  // Confirm criteria
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }

  // Generate password based on criteria
  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  // Get reference to the #password element
  var passwordText = document.querySelector("#password");

  // Display generated password
  passwordText.value = password;
}

// Function to generate password
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  // Define character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-=_+[]{}|;:'\",.<>/?";

  // Initialize character pool
  var charPool = "";

  // Add selected character sets to the pool
  if (includeLowercase) {
    charPool += lowercaseChars;
  }
  if (includeUppercase) {
    charPool += uppercaseChars;
  }
  if (includeNumeric) {
    charPool += numericChars;
  }
  if (includeSpecial) {
    charPool += specialChars;
  }

  // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomIndex);
  }

  return password;
}