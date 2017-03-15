function myReplace(str, before, after) {
  
  before = before.split(""); // String to Array with every letter separated.
  
  after = after.split("");// String to Array with every letter separated.
  
  if (before[0] === before[0].toUpperCase()){  // Compare if the first letter is uppercase or not.
    
    after[0] = after[0].toUpperCase();  // If it's uppercase, change the after array first letter to uppercase.
    
  } else {
    
     after[0] = after[0].toLowerCase();  // If it's lowercase, do the same but in lowercase.
  }
  
  before = before.join("");  // Join the array into a string.
  
  after = after.join("");  // Join the array into a string.
  
  var newStr = str.replace(before,after);  // .replace() takes the string 'before' word and changes it to 'after'.
  
  return newStr;  // Return the corrected string.
}

myReplace("Let us go to the store", "store", "mall"); // should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); // should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling"); // should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john"); // should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms"); // should return "Let us get back to more Algorithms".
