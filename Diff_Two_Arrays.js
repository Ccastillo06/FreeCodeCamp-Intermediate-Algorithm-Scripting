function diffArray(arr1, arr2) {
  
  var newArr = arr1.concat(arr2); // Concatenate the two arrays.
  
  var finalArr =[]; // Create a new variable to store the final array with different values.
  
  for ( var i = 0; i < newArr.length; i++){  // Loop through newArr length with i.
    
    var n = 0;  // Variable to count conditions which will reset every completed loop.
    
    for ( var j = 0; j < newArr.length; j++){  // Loop through newArr length with j.
      
      if ( newArr[i] === newArr[j]){  // If an element coincides with other.
        
        n++;  // Count rises when coincidence happens.
      }
    }
    
    if ( n === 1){  // Whenever n surpases 1, the element appears more than once and no condition happens.
      
        finalArr.push(newArr[i]);  // So push into finalArr the elements that appears only once.
        
      }
  }
  
  return finalArr;  // Returns the completed finalArr.
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return an array.
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // should return ["pink wool"].
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // should return ["diorite", "pink wool"].
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]); // should return [].
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);// should return [4].
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // should return ["piglet", 4].
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); // should return ["snuffleupagus", "cookie monster", "elmo"].
diffArray([1, "calf", 3, "piglet"], [7, "filly"]); // should return [1, "calf", 3, "piglet", 7, "filly"].
