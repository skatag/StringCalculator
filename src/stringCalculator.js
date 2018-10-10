//stringCalculator.js


function add (numbers){ //returns 0 on an empty string
	

	if(parseInt(numbers) < 0){
			throw new Error('negatives not allowed');	
	}
	
	if(numbers == ""){
		return 0;
	}	
	
	if(numbers.includes("\n")){
		numbers = numbers.replace(/\n/g, ","); //change "\n" to "," so only one loop needed
	}
	if(numbers.includes(",")){ //decide on a delimiter
		var numberArray = (numbers.split(","));
		var total = 0;
		for(var i = 0; i < numberArray.length; i++){
			 //loop through length of array
				total += parseInt(numberArray[i]);
		}
	
		return parseInt(total);
	}
	
	else{
	return parseInt(numbers);	//return number if only one number
	}
}

module.exports = add;