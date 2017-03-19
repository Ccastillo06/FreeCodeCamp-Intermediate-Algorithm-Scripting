function addTogether (x) {
  
 if (arguments.length === 1 && typeof arguments[0] === 'number'){  // If the argument is only a number.
   
   return function (y) {  // return a function to provide another number.
     
     if (typeof arguments[0] === 'number'){  // If a number is provided then do the sum.
       
       return x + y;  // If no number is provided the sum will return undefined.
     }
   };
 
 } else {  // In case the argument is formed by two numbers.
   
   if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number' ){  // If any member isn't a number.
     
     return undefined;  // Return undefined.
     
   }
   
   return arguments[0] + arguments[1];  // Either way, return the sum of both.
 }
}

addTogether(2, 3); // should return 5.
addTogether(2)(3); // should return 5.
addTogether("http://bit.ly/IqT6zt"); // should return undefined.
addTogether(2, "3"); //; // should return undefined.
addTogether(2)([3]); // should return undefined.
