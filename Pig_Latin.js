function translatePigLatin(str) {
  
  var arr = str.split("");  // Create an array out of the string.
  
  var vowels = ["a","e","i","o","u"];  // All vowels in an array.
  
  arr[0] = arr[0].toLowerCase();  // To lowercase in order to make comparisons and have no mistakes.
  
  if (vowels.indexOf(arr[0]) < 0){ // Meaning the array starts in consonant.
    
    for (var i = 0; i < arr.length; i++){  // Loop through the array starting from 0 to count properly.
      
      if (vowels.indexOf(arr[i]) >= 0){ // Condition meaning a vowel is found.
  
        while ( i > 0){  // Loop from the actual position backwards.
         
          arr.push(arr[0]);  // Push the first element to the end of the array.
          
          arr.shift(arr[0]);  // Shift that first element from the array.
         
          i--;  // Reduce i to loop backwards.
        }
        
        i = arr.length;  // If condition happens, cut the for loop, either way, keep looping.
        
      }
    }
    
    arr.push("ay");  // Push "ay" in the end as Pig Latin rules say in this case.
    
    str = arr.join("");  // Join into the array again. 
    
  } else {  // Meaning the array starts in vowel.
    
    arr.push("way");  // Push "way" in the end as Pig Latin rules say in this case.
    
    str = arr.join("");  // Join into the array again.
    
  }
  
   return str;  // Return the final transformed array.
}

translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".
