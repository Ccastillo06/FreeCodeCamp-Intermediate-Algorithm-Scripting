function sumPrimes(num) {
  
  var sum = 0; // A variable to store the sums.
  
  for (var i = 2; i <= num; i++){  // Loop through the number given.
    
    var prime = true;  // A boolean to validate the condition.
    
    for (var j = 2; j < i; j++){  // Sum 1 by 1 till the given number.
      
      if (i % j === 0){  // If the rest of the given number divided by j starting from 2 is 0, the number is not prime.
        
        prime = false;  // So prime variable is false.
      }
    }
    
    if (prime){  // If prime is still true.
      
      sum = sum + i;  // Sum the variable i as a prime number into the store sum variable.
    }
  }
  
  return sum;  // Return the total sum.
}

sumPrimes(10); // should return a number.
sumPrimes(10); // should return 17.
sumPrimes(977); // should return 73156.
