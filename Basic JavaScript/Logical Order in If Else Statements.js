// Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
    if (val < 5) {
        console.log("Less than 5");
    } else if (val < 10) {
        console.log("Less than 10");
    } else {
        console.log("Greater than or equal to 10");
    }
}

orderMyLogic(4);
orderMyLogic(6);
orderMyLogic(11);