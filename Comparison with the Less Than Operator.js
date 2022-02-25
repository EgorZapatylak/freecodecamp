//Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
    if (val < 25) {  // Change this line
        console.log("Under 25");
    } else if (val < 55) {  // Change this line
        console.log("Under 55");
    }else {
        console.log("55 or Over");
    }
}

testLessThan(0);
testLessThan(24);
testLessThan(25);
testLessThan(54);
testLessThan(55);
testLessThan(99);
