function spinalCase(str) {
 
  str = str.replace(/[A-Z]/g, function spaceIt(x){return " " + x ;}).replace(/_/g, "-").replace(/\s/g, "-").replace(/\W/g, "-").toLowerCase();  // Replace can host a function, or a character. The two methods are used here.
  
  
  var arr = str.split(""); // After replacing, let's loop through the array to quit the - surplus.
  
  for(var i = 0; i < arr.length; i++){
    
    if (arr[0] === "-"){  // If first element is "-", shift it away.
      
      arr.shift();
      
    }
    
    if (arr[i] === "-" && arr[i] === arr[i+1]){  // If there are two "-" together, quit one.
      
      arr[i] = "";
    }
  }
  
  str = arr.join("");  // Join everything again into the string.
  
  return str;  // Return the transformed string.

}

spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); // should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); // should return "all-the-small-things".
