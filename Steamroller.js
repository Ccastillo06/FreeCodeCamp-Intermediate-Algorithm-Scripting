function steamrollArray(arr) {
 
  var newArr = [];  // Create a new array to store the values.
  
  for (var i = 0; i < arr.length; i++){  // Loop the given array.
    
    if (Array.isArray(arr[i])){  // If the condition is true, that means there is a nested array in the position.
      
      newArr = newArr.concat(steamrollArray(arr[i]));  // So the given position goes through the function again and concats.
      
    } else{
      
      newArr.push(arr[i]);  // If the value isn't nested, just push it into the array directly.
    }
  }
  
  return newArr;  // Return the final array.
}


steamrollArray([[["a"]], [["b"]]]); // should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); // should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]); // should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]); // should return [1, {}, 3, 4].
