//Replace the two if statements with one statement, using the && operator,
// which will return the string Yes if val is less than
// or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

function testLogicalAnd(val) {
    // Only change code below this line

    if (val >= 25 && val <= 50){
        console.log("Yes");
    } else {
        console.log("No");
    }
}

testLogicalAnd(0);
testLogicalAnd(24);
testLogicalAnd(25);
testLogicalAnd(30);
testLogicalAnd(50);
testLogicalAnd(51);
