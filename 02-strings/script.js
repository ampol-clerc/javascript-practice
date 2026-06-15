// String Concatenation
var message = "Hello";
var helloName = "Ampol";
alert(message + ", " + helloName);

// String Lengths and Retrieving the Number of Characters
// You have written 182 characters, you have -42 characters left.
var post = prompt("Input your post: ");
var postCount = post.length;

console.log("Original post: " + post);
console.log("Original Character Count: " + postCount);
alert("You have written " + postCount + " characters, you have " + (140 - postCount) + " characters remaining.");


// Slicing and Extracting Parts of a String
var tweet = prompt("Compose your tweet: ");
var tweetUnder140 = tweet.slice(0, 140);
var result = tweetUnder140.length;

console.log("Original Tweet: " + tweet);
console.log("Truncated Tweet (Under 140): " + tweetUnder140);
console.log("Truncated Character Count: " + result);
alert("Your Tweet: " + result + " chars, " + tweetUnder140);