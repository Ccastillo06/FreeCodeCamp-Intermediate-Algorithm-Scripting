function dropElements(arr, func) {
  
  for (var i = 0; i < arr.length; i++){  // Loop the array.
    
    if (!func(arr[i])){  // If func doesn't return true.
      
      arr.shift();  // Shift out of the array that element.
      
      i = -1;  // And restart the loop from 0, because push() changes the array's length.
      
    } else {  // In case it's true.
      
      i = arr.length;  // End the loop.
    }
  }
  
  return arr;  // Return the array.
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); // should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}); // should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}); // should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}); // should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}); // should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}); // should return [3, 9, 2].
