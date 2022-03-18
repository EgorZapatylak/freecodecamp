//In the checkSign function, use multiple conditional operators - following the recommended format used in
// checkSing - to check if a number is positive, negative or zero. The function should return positive, negative or zero.


function checkSign(num) {

    console.log((num === 0) ? "zero" : (num > 0) ? "positive" : "negative");

}

checkSign(10);
checkSign(0);
checkSign(-12);