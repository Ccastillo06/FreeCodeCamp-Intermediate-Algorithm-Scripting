function whatIsInAName(collection, source) {  // The function takes the first array of objects and the second argument.
  
  var key = Object.keys(source);  // Give the name of the objects inside source to a variable as an array.
  
  return collection.filter(function (colObj) { // .filter() returns an array formed by the objects that pass the condition.
    
    for ( var i=0; i < key.length; i++){  // A for loop to run through the array given.
      
      if (colObj.hasOwnProperty(key[i]) === false ){  // If .hasOwnProperty() isn't true, no source on array.
        
        return false;  // So returning false won't output the object in the array.
      }
      
      if (colObj[key[i]] !== source[key[i]]){  // Object properties are named with object["propertyname], no coincidendes in the collection array and source means false. 
        
        return false;  // So returning false won't output the object in the array.
      }
    }
    
    return true;  // If no condition happens, it returns true, so forms the array with the correct objects.
  });
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }); // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }); // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); // should return [{ "a": 1, "b": 2, "c": 2 }].
