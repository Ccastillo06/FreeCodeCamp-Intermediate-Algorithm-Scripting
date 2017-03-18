function sumFibs(num) {
  
  var fib = 2, sum = 2, x = 1; // Start the sum in 2 because every number will have 1 + 1 as first two odd numbers.
  
  while (fib <= num){  // Considering the number itself odd, <= is the way to enter the loop.
    
    if (fib % 2 !== 0){  // If % is not 0, that means the number is odd.
      
      sum = sum + n;  // The sum will increase in n.
    }
    
    var prevN = n;  // Helping variable to store n before increasing the fibonacci secuence.
    
    fib = fib + x; // The number + it previous self is the new fibonacci series number.
    
    x = prevN;  // So x adquires that value.
  }
  
  return sum;  // Return the sum of the sequence.
}

sumFibs(1); // should return a number.
sumFibs(1000); // should return 1785.
sumFibs(4000000); // should return 4613732.
sumFibs(4); // should return 5.
sumFibs(75024); // should return 60696.
sumFibs(75025); // should return 135721.
