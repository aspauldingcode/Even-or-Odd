
//Ask user for input number
let numCount = prompt("Give a number:");
numCount = parseInt(numCount);

// //Loop for counting until the user's number has been reached
// for(let i = 1; i < numCount; i++) {
//     console.log(i + 1);
// }


//is it even or odd? Printed to the log.
let countNumber = "";
let countedOdd = true;
for(let i = 1; i <= numCount; i++) {
    if(countedOdd) {
        console.log(i + "odd")
    }
    else {
        console.log(i + "even")
    }
    countedOdd = !countedOdd
} 