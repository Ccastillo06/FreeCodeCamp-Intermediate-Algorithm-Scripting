function uniteUnique(arr) {
  
  var arg = Array.from(arguments);  // Take all the arguments into a single array of arrays.
  
  var union = arg.reduce(function(a, b){  // Use .reduce() to concatenate the sub arrays in one array.
  
   return a.concat(b);  // Accumulator (a) concatenates the new variable (b) added to the funtion.
  });
  
  for (var j = arr.length ; j < union.length; j++){  // Loop trough the union array parting from arr.length.
    
    var n = 0;  // Counting variable which will reset every whole loop.
    
     for (var i = 0 ; i < arr.length; i++){  // Loop through arr to compare.
       
       if (union[j] === arr[i]){  // Whenever a number appears in both arrays, sum 1 to variable n.
         
         n++;
       }
     }
    
    if (n === 0){  // If n is 0, that means the number is not repeated.
      
      arr.push(union[j]);  // So the number will be pushed into arr.
    }
  }
    
  return arr;  // Return arr completely sorted.
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); // should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]); // should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // should return [1, 2, 3, 5, 4, 6, 7, 8].
