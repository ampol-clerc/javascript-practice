// Working with Javascript Arrays
// Checking Guest List Name
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason", "Ampol"];
var guestName = prompt("What is your name?");

function checkGuestName() {
    if (guestList.includes(guestName)) {
        alert("Welcome!");
    } else {
        alert("Sorry, maybe next time.");
    }
}
checkGuestName();

console.log("Guest Name: " + guestName);


// Adding Elements and Intermediate Array (Program FizzBuzz)
var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}