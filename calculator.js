function add(arg1, arg2) {
	return arg1 + arg2;
}

function subtract(arg1, arg2) {
	return arg1 - arg2;
}


function sum(...args) {
	let array = Array.from(...args);
	array.push(0);
	return array.reduce((total, current) => total + current);
}

function multiply(...args) {
	let array = Array.from(...args);
	return array.reduce((total, current) => total * current);
}

function power(number, power) {
	return Math.pow(number, power);
}

function factorial(number) {
	if (number < 0) {
		return -1;
	} else if (number == 0) {
		return 1;
	}
	let result = number;
	while (number > 1) {
		number--;
		result = result * number;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}