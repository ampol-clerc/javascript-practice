// Random Number Generation
var n = Math.random();
n = n * 6;
n = Math.floor(n);
console.log("Basic Random Number (0-5): " + n);

// The Love Calculator Feature
var yourName = prompt("Your Name: ");
var yourCrush = prompt("Your Crush: ");

console.log("User Name: " + yourName);
console.log("Crush Name: " + yourCrush);

// Random Number (1 - 100)
var loveCalculator = Math.random() * 100;
loveCalculator = Math.floor(loveCalculator) + 1;

console.log("Calculates Love Score: " + loveCalculator + "%");
alert(yourName + " & " + yourCrush + " love score is " + loveCalculator + "%");
