// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        console.log("Over 100");
    }else if (val > 10) {  // Change this line
        console.log("Over 10");
    }else {
        console.log("10 or Under");
    }
}

testGreaterThan(10);
testGreaterThan(0);
testGreaterThan(110);
testGreaterThan(12);
testGreaterThan(9);