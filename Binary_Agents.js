function binaryAgent(str) {
  
  var arr = str.split("");  // Split the string into single characters.
  
  var finalArr = [];  // Array to store the final result.
  
  while (arr.length > 0){  // Loop until arr lost all content.
    
    var newArr = [];  // New array to store arr valid values.
    
    for (var i = 0; i < arr.length; i++){  // Loop arr.
      
      if (arr[i] === " "){  // If there is a blank space, break the loop.
        
        i = arr.length; 
      
      }  else {  // If character, push it into the new array.
        
        newArr.push(arr[i]);
      }
    }
    
    
    var sum = 0;  // This code is used to transform binary to decimal.
    
    for (var j = 0; j < newArr.length; j++){  // Loop through the new array.
      
      if (newArr[j] == 1){  // whenever there is a 1 as the value.
        
        var mult = 1;  // To store the times 2 appears.
        
        for (var n = 0; n < (newArr.length - 1 - j); n++){  // The position of the binary starting from the end.
          
          mult = mult * 2;  // This is 2 ^ (position from the end) for each 1 that appears.
        }
        
        sum = sum + mult;  // And that value sums until the decimal is formed.
      }
    }
    
    
    finalArr.push(String.fromCharCode(sum));  // Store in finalArr the character corresponding to sum value.
    
    var x = 0;  // In order to shift also the blank spaces, do the loop newArr.length times + 1
    
    while (x < newArr.length + 1){  // Loop newArr.length times to shift from arr that many elements.
      
      arr.shift();  // The shift function.
      
      x++;  // Increment x by 1 each loop.
    }
  }
  
  return finalArr.join("");  // Return the joined array into a string.
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"); // should return "I love FreeCodeCamp!"
