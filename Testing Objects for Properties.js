// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp).
// If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
        console.log(obj[checkProp]);
    } else {
        console.log("Not Found");
    }
    // Only change code above this line
}


checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")
checkObj({city: "Seattle"}, "city")
checkObj({city: "Seattle"}, "district")
checkObj({pet: "kitten", bed: "sleigh"}, "gift")

