function addTogether (first, second) {
  
 if (arguments.length === 1 && typeof first === 'number'){  // If the argument is only a number.
   
   return function (newSecond) {  // return a function to provide another number.
     
     if (typeof newSecond === 'number'){  // If a number is provided then do the sum.
       
       return first + newSecond;  // If no number is provided the sum will return undefined.
     }
   };
 
 } else {  // In case the argument is formed by two numbers.
   
   if (typeof first !== 'number' || typeof second !== 'number' ){  // If any member isn't a number.
     
     return undefined;  // Return undefined.
     
   }
   
   return first + second;  // Either way, return the sum of both.
 }
}

addTogether(2, 3); // should return 5.
addTogether(2)(3); // should return 5.
addTogether("http://bit.ly/IqT6zt"); // should return undefined.
addTogether(2, "3"); //; // should return undefined.
addTogether(2)([3]); // should return undefined.
