function booWho(bool) {
  
  if ( bool === true || bool === false){  // Strict equivalent for true or false.
    
     return true;  // Return true if it's a primitive.
    
  } else {  // If it's different from primitives.
    
    return false;  // Return false.
  }
}

booWho(true); // should return true.
booWho(false); // should return true.
booWho([1, 2, 3]); // should return false.
booWho([].slice); // should return false.
booWho({ "a": 1 }); // should return false.
booWho(1); // should return false.
booWho(NaN); // should return false.
booWho("a"); // should return false.
booWho("true"); // should return false.
booWho("false"); // should return false.
