function findElement(arr, func) {
  
  var n = 0;  // Variable to loop through the array using while.
  
  var num;  // An undefined number.
  
  while (n < arr.length){  // Loop through the array.
    
    if (func(arr[n])){  // Get in function using the value of the array with n.
      
      num = arr[n];  // If it passes the function, num is arr[n].
      
      n = arr.length;  // And the while breaks.
    }
    
    n++;  // Increment of n to loop.
  }
  
  
  return num;  // Return the valid number or default if there wasn't one valid.
}  

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }); // should return undefined.
