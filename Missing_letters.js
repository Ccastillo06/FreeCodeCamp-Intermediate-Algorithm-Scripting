function fearNotLetter(str) {
  
  for (var i = 0; i < str.length; i++){
    
    if (str.charCodeAt(i+1) - str.charCodeAt(i) > 1){  // Condition means there is a missing letter.
      
      var arr = str.split("");  // Make the str an array.

      return String.fromCharCode(str.charCodeAt(i) + 1);  // Missing letter from the charcode between the two in the array.
    } 
  }
  
  return undefined; // If loop ends and there is no missing letter, return undefined.
}

fearNotLetter("abce"); // should return "d".
fearNotLetter("abcdefghjklmno"); // should return "i".
fearNotLetter("bcd"); // should return undefined.
fearNotLetter("yz"); // should return undefined.
