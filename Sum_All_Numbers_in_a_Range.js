function sumAll(arr) {

 var a = arr.shift(), b = arr.pop(), c = 0; // Take first element and last element in array with shift() and pop().
  
 var min = Math.min(a,b), max = Math.max(a,b); // Create min and max using Math.min/max() functions.

  while (min <= max){  // Loop through the interval created.
    
    c = c + min;  // Variable c will store the final result.
    
    min++;  // Increment min by 1 each loop until it gets to be max.
    
  }
  
  return c;  // Return the sum of the numbers in the array and the ones between them.
}

sumAll([1, 4]); // should return a number.
sumAll([1, 4]); // should return 10.
sumAll([4, 1]); // should return 10.
sumAll([5, 10]); // should return 45.
sumAll([10, 5]); // should return 45.
