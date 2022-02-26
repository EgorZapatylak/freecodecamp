//Your function will be passed par and strokes arguments.
//Return the correct string according to this table which lists
// the strokes in order of priority; top (highest) to bottom (lowest):

// Strokes	     Return
// 1	        "Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	    "Birdie"
// par	        "Par"
// par + 1	    "Bogey"
// par + 2	    "Double Bogey"
// >= par + 3	"Go Home!"

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        console.log(names[0]);
    } else if (strokes <= par - 2) {
        console.log(names[1]);
    } else if (strokes == par - 1) {
        console.log(names[2]);
    } else if (strokes == par) {
        console.log(names[3]);
    } else if (strokes == par + 1) {
        console.log(names[4]);
    } else if (strokes == par + 2) {
        console.log(names[5]);
    } else if (strokes >= par + 3) {
        console.log(names[6]);
    }

}

golfScore(4, 1);
golfScore(5, 2);
golfScore(4, 4);
golfScore(5, 7);
golfScore(5, 9);
golfScore(1, 1);
golfScore(4, 4);