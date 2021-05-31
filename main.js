// creating array to hold the numbers 
	number_array = [];
   

    // when submit button is clicked, submit function is called, below defining the submit function
	
	function submit()
	{
        // making individual 5 variables to hold the value from the text input.
        var no_1 = document.getElementById("no_1").value;
        var no_2 = document.getElementById("no_2").value;
        var no_3 = document.getElementById("no_3").value;
        var no_4 = document.getElementById("no_4").value;
        var no_5 = document.getElementById("no_5").value;

        // puting the value of variables(i.e text input value) in the array one by one
      number_array.push(no_1);
        number_array.push(no_2);
       number_array.push(no_3);
        number_array.push(no_4);
        number_array.push(no_5);
 // dispalying the array on console
		console.log(number_array);

	// displaying the array on the div , created in html	
        document.getElementById("display_name").innerHTML = number_array;
        
        // making the button submit disappear and making sort button appear
        document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";

	}

// when sort button is clicked, sorting function is called, below defining the sort function
function sorting(number_array){
      

// on console displaying the array
    console.log(number_array);

// finding the length of the array
    var length = number_array.length
	
    for(var i = 0; i < length; i++){
        
    // Last i elements are already in place
    for(var j = 0; j < ( length - i -1 ); j++){
        
        // Checking if the item at present iteration
        // is greater than the next iteration
        if(number_array[j] > number_array[j+1]){
            
        // If the condition is true then swap them
        var temp = number_array[j]
        number_array[j] = number_array[j + 1]
        number_array[j+1] = temp
        }
    }
    }
    // Print the sorted array o the div and console
    console.log(number_array);
    document.getElementById("display_name").innerHTML = number_array;
    
    }
    
    
   
   
     
    