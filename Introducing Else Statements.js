//Combine the if statements into a single if/else statement.

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }else {
        result = "5 or Smaller";
    }
    console.log(result);
}

testElse(4);
testElse(5);
testElse(6);
testElse(10);