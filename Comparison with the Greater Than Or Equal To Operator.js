//Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        console.log("20 or Over");
    } else if (val >= 10) {  // Change this line
        console.log("10 or Over");
    } else {
        console.log("Less than 10");
    }
}

testGreaterOrEqual(10);
testGreaterOrEqual(100);
testGreaterOrEqual(2);
testGreaterOrEqual(19);
testGreaterOrEqual(21);
