//stringCalculator.js
function add (numbers){ //returns 0 on an empty string
	if(numbers == ""){
		return 0;
	}	

	if(numbers.includes(",")){ //decide on a delimiter
		var numberArray = numbers.split(",");
		var total = 0;
		for(var i = 0; i < numberArray.length; i++){ //loop through length of array
			total += parseInt(numberArray[i]);
		}
		return parseInt(total);
	}
	else{
	return parseInt(numbers);	//return number if only one number
	}
}

module.exports = add;