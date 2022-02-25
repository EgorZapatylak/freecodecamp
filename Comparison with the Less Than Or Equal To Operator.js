//Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        console.log("Smaller Than or Equal to 12");
    }else if (val <= 24) {  // Change this line
        console.log("Smaller Than or Equal to 24");
    } else {
        console.log("More Than 24");
    }
}

testLessOrEqual(0);
testLessOrEqual(11);
testLessOrEqual(12);
testLessOrEqual(24);
testLessOrEqual(23);
testLessOrEqual(99);
testLessOrEqual(55);