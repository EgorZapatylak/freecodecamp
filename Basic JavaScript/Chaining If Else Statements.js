//Write chained if/else if statements to fulfill the following conditions:
//
// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        console.log("Tiny");
    } else if (num < 10) {
        console.log("Small");
    } else if (num < 15) {
        console.log("Medium");
    } else if (num < 20) {
        console.log("Large");
    } else if (num >= 20) {
        console.log("Huge");
    }
    // Only change code above this line
}

testSize(0);
testSize(4);
testSize(5);
testSize(10);
testSize(14);
testSize(15);
testSize(17);
testSize(20);
testSize(25);