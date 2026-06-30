// Leap Year Challenge Exercise

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            }
            else {
                return "Not leap year.";
            }
        }
        else {
            return "Leap year.";
        }
    }
    else {
        return "Not leap year.";
    }
}

// Test Function
var checkYear = prompt("Enter Year ?");
var result = isLeap(checkYear);

console.log("Is " + checkYear + " a leap year?: " + result);
alert(checkYear + " IS a " + result);