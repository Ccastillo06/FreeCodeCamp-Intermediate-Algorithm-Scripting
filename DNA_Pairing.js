function pairElement(str) {
  
  var basePairs = [];  // New array containing the pairs.
  
  var arr = str.split("");  // Separate the string into every element inside an array.
  
  for (var i = 0; i < arr.length; i++){ // Loop though the array.
    
    switch (arr[i]){  // Having many cases make it easier for a switch statement.
        
      case 'A': 
        
        basePairs.push(["A","T"]);  // Push the pair corresponding the letter.
        
        break;
        
      case 'T':
        
        basePairs.push(["T","A"]);
        
        break;
        
      case 'C':
        
        basePairs.push(["C","G"]);
        
        break;
        
      case 'G':
        
        basePairs.push(["G","C"]);
        
        break;
      
      default:
        
        return "Not valid pair";  // In case the input is wrong.
    }
  }
  
  return basePairs;  // Return the pairs chained in an array.
}

pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
