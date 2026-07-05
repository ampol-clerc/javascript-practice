// Basic For Loop Practice (Sum of numbers)
function calculateSum(targetNumber) {
    var total = 0;

    for (var i = 1; i <= targetNumber; i++) {
        total += i;
    }
    console.log("Sum from 1 to " + targetNumber + " is: " + total);
}

calculateSum(10);