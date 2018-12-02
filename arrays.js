var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

<<<<<<< HEAD
var array = [1];
var foo = "foo";
var array2 = [1, 2, 3];

function addElementToBeginningOfArray(array, foo) {
	return ['foo', ...array];
}

function destructivelyAddElementToBeginningOfArray(array, foo) {
	array.unshift('foo');
	return array;
}

function addElementToEndOfArray(array, foo) {
	return [...array, 'foo'];
}

function destructivelyAddElementToEndOfArray(array, foo) {
	array.push('foo');
	return array;
}

function accessElementInArray(array2, index) {
	return array2[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array2) {
	array2.shift();
	return array2;
}

function removeElementFromBeginningOfArray(array2) {
	array3 = array2.slice(-2);
	return array3;
}

function destructivelyRemoveElementFromEndOfArray(array2) {
	array2.pop();
	return array2;
}

function removeElementFromEndOfArray (array2) {
	array3 = array2.slice(0, array2.length - 1);
	return array3;
=======
function addElementToBeginningOfArray() {
	var array = [1, 2, 3, 4];
	[0, ...array];
	array
}

function destructivelyAddElementToBeginningOfArray() {

>>>>>>> 58b58f23ed5fb16a46cc2cb288aa408cc26775fd
}