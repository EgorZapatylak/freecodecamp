//Use the conditional operator in the checkEqual function to check if two numbers are equal or not.
//
//The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {

    console.log(a === b ? "Equal" : "Not Equal");

}

checkEqual(1, 2);
checkEqual(1, -1);
checkEqual(1, 1);
checkEqual(2, 2);