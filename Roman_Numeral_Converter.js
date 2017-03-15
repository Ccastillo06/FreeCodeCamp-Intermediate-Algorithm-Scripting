function convertToRoman(num) {  // Brute force solution using while loops.
 
  var arr = [];  // Create an empty array.
  
  while (num >= 1000){  // Loop until num is lower than 1000.
    
    arr.push("M");  // Push M into the array for every 1000 subtracted.
    
    num = num - 1000;  // Subtract 1000 every loop.
  }
  
  if ( num >= 900){  // Conditions for higher or equal to 900, 500 or 400.
      
      arr.push("CM");  
      
      num = num - 900;
  }
  
  if ( num >= 500){
      
      arr.push("D");
      
      num = num - 500;
  }
  
  if ( num >= 400){
      
      arr.push("CD");
      
      num = num - 400;
  }
  
  while (num >= 100){ // Loop until num is lower than 100.
      
      arr.push("C");  // Push C into the array for every 100 subtracted.
    
      num = num - 100;  // Subtract 100 every loop.
  }
  
  if ( num >= 90){  // Conditions for higher or equal to 90, 50 or 40.
       
       arr.push("XC");
       
       num = num - 90;
  }
  
  if ( num >= 50){
       
       arr.push("L");
       
       num = num - 50;
  }
  
  if ( num >= 40){
       
       arr.push("XL");
       
       num = num - 40;
  }
  
  while (num >= 10){  // Loop until num is lower than 100.
       
       arr.push("X");
     
       num = num - 10;
  }
  
  if ( num >= 9){  // Conditions for higher or equal to 9, 5 or 4.
      
      arr.push("IX");
      
      num = num - 9;
  }
  
  if ( num >= 5){
      
      arr.push("V");
      
      num = num - 5;
  }
  
  if ( num >= 4){
      
      arr.push("IV");
      
      num = num - 4;
  }
  
  while ( num >= 1){  // Loop until num is 1.
    
      arr.push("I");
    
      num = num - 1;
  }
  
  
  
  return arr.join("");  // Join the array where every letter is pushed into a string.
  
}

convertToRoman(2); // should return "II".
convertToRoman(3); // should return "III".
convertToRoman(4); // should return "IV".
convertToRoman(5); // should return "V".
convertToRoman(9); // should return "IX".
convertToRoman(12); // should return "XII".
convertToRoman(16); //; // should return "XVI".
convertToRoman(29); // should return "XXIX".
convertToRoman(44); // should return "XLIV".
convertToRoman(45); // should return "XLV"
convertToRoman(68); // should return "LXVIII"
convertToRoman(83); // should return "LXXXIII"
convertToRoman(97); // should return "XCVII"
convertToRoman(99); // should return "XCIX"
convertToRoman(500); // should return "D"
convertToRoman(501); // should return "DI"
convertToRoman(649); // should return "DCXLIX"
convertToRoman(798); // should return "DCCXCVIII"
convertToRoman(891); // should return "DCCCXCI"
convertToRoman(1000); // should return "M"
convertToRoman(1004); // should return "MIV"
convertToRoman(1006); // should return "MVI"
convertToRoman(1023); // should return "MXXIII"
convertToRoman(2014); // should return "MMXIV"
convertToRoman(3999); // should return "MMMCMXCIX"
