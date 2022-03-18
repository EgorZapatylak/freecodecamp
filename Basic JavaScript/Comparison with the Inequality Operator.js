//Add the inequality operator != in the if
// statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        console.log("Not Equal");
    }else {
        console.log("Equal");
    }
}

testNotEqual(12);
testNotEqual(99);
testNotEqual("99");