//Combine the two if statements into one statement which returns the string
//Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        console.log("Outside");
    }else {
        console.log("Inside");
    }
}

testLogicalOr(0);
testLogicalOr(9);
testLogicalOr(10);
testLogicalOr(15);
testLogicalOr(19);
testLogicalOr(20);
testLogicalOr(21);
