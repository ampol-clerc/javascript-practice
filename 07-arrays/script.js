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