function convertHTML(str) {
  
  var arr = str.split("");  // Separate every letter in an array.
  
  for (i = 0; i < arr.length; i++){  // Loop through the array.
    
    switch (arr[i]){  // Whenever any of these cases happen, do the action.
        
      case '&':  // Find the character.
        
        arr[i] = "&amp;";  // Change the value to the HTML entitie.
        break;
      
      case '<':
        
        arr[i] = "&lt;";
        break;
      
      case '>':
        
        arr[i] = "&gt;";
        break;
      
      case '\"':
        
        arr[i] = "&quot;";
        break;
      
      case '\'':
        
        arr[i] = "&apos;";
        break;
    }
  }
  
  str = arr.join("");
  
  return str;
}

convertHTML("Dolce & Gabbana"); // should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos"); // should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve"); // should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"'); // should return Stuff in &quot;quotation marks&quot;.
convertHTML("Shindler's List"); // should return Shindler&apos;s List.
convertHTML("<>"); // should return &lt;&gt;.
convertHTML("abc"); // should return abc.
