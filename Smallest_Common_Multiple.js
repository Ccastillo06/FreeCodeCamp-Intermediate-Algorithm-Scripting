function smallestCommons(arr) {
  
  var min = Math.min(arr[0],arr[1]);  // Pick the min value in the given array.
  
  var max = Math.max(arr[0],arr[1]);  // Pick the max value too.
  
  var newArr = [];  // Create a new array to store the number series.
  
  for (var i = max; i >= min; i--){  // Order the array descending.
    
    newArr.push(i);  // Push every number into the new array.
  }
  
  var n = 1;  // A variable to store all the multiples.
  
  var mult, j;  // One variable to store the final SCM and another to loop through the array.
  
  while (j !== newArr.length){  // While j isn't the newArr length.
  
  mult = newArr[0] * newArr[1] * n;  // The two first elements multiplied per n, which will store the rest of multiples.
  
  for (j = 2; j < newArr.length; j++){  // Starting from the [2] element in newArr and so on.
    
    if (mult % newArr[j] !== 0){  // If the rest of mult / newArr[j] isn't 0, that means it's not divisible yet.
      
      break;  // So the for breaks and j doesn't increase, continuing in the while loop.
    }
  }
    
    n++;  // So n increases by 1 each loop, until it's value is the same as the missing multiples from mult.
  }
  
  return mult;  // Return mult once the number is divisible by every number in the sorted array.
}


smallestCommons([1, 5]); // should return a number.
smallestCommons([1, 5]); // should return 60.
smallestCommons([5, 1]); // should return 60.
smallestCommons([1, 13]); // should return 360360.
smallestCommons([23, 18]); // should return 6056820.
