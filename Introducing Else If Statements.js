// Convert the logic to use else if statements.

function testElseIf(val) {
    if (val > 10) {
        console.log("Greater than 10");
    }else  if (val < 5) {
        console.log("Smaller than 5");
    } else {
        console.log("Between 5 and 10");
    }
}
testElseIf(7);
testElseIf(0);
testElseIf(5);
testElseIf(10);
testElseIf(12);