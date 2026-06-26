// Part 1: Creating and Calling Functions

function getMilk() {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");
  console.log("buy 12 bottles of milk");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk();

// Part 2: Functions with Parameters and Arguments

function lifeInWeeks(age) {
    var yearLeft = 90 - age;
    var dayLeft = yearLeft * 365;
    var weekLeft = yearLeft * 52;
    var monthLeft = yearLeft * 12;

    console.log("Input Age: " + age);
    console.log("You have " + dayLeft + " days, " + weekLeft + " weeks, and " + monthLeft + " months left.");

    //alert("You have " + dayLeft + " days, " + weekLeft + " weeks, and " + monthLeft + " months left.");
}

lifeInWeeks(29);

// Part 3: Functions with Outputs and Return Values

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

var myBMI = bmiCalculator(65, 1.8);
console.log("Calculated BMI value: " + myBMI);
// alert("Your calculated BMI is " + myBMI);