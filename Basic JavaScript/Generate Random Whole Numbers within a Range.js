//Create a function called randomRange that takes a range myMin and myMax and returns a random whole number
// that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.


function randomRange(myMin, myMax) {
    // Only change code below this line
    console.log(Math.floor(Math.random() * (myMax - myMin + 1)) + myMin);
    // Only change code above this line
}

randomRange(1, 2);
randomRange(7, 14);
randomRange(3, 4);
randomRange(5, 4);