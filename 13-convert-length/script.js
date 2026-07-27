// Function convertLength(length, from, to) that takes a number and a unit ('km' or 'miles') and converts the length to another unit ('km' or 'miles').
// Note: 1 mile = 1.6 km (approximately)

function convertLength(length, from, to) {
  // Conversion Logic statement
  if (from === "km" && to === "miles") {
    return `${length / 1.6} miles`;
  } else if (from === "miles" && to === "km") {
    return `${length * 1.6} km`;
  } else if (from === to) {
    return `${length} ${to}`;
  }
}

// Test function
console.log("50 miles to km = " + convertLength(50, "miles", "km"));
console.log("32 km to miles = " + convertLength(32, "km", "miles"));
console.log("50 km to km = " + convertLength(50, "km", "km"));
