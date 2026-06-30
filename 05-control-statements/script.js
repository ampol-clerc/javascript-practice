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


// BMI Calculator Advanced (IF/ELSE)
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var bmiShort = bmi.toFixed(1);
    var interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmiShort + ", so you are underweight.";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmiShort + ", so you have a normal weight.";
    }
    else {
        interpretation = "Your BMI is " + bmiShort + ", so you are overweight.";
    }
    
    return interpretation;
}

var bmiResult = bmiCalculator(61, 1.74);
console.log("BMI Interpretation Result: " + bmiResult);
alert(bmiResult);