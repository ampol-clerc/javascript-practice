// Basic For Loop Practice (Sum of numbers)
function calculateSum(targetNumber) {
  var total = 0;

  for (var i = 1; i <= targetNumber; i++) {
    total += i;
  }
  console.log("Sum from 1 to " + targetNumber + " is: " + total);
}

calculateSum(10);

// Mini-Project - The Guest Invitation List using For Loop
var vipGuests = ["Ampol", "Bernard", "Jack"];

function sendInvitations(guestArray) {
  var invitationCards = [];

  for (var i = 0; i < guestArray.length; i++) {
    var currentName = guestArray[i];
    var formattedName =
      currentName.slice(0, 1).toUpperCase() +
      currentName.slice(1).toLowerCase();

    invitationCards.push("Invitation sent to: VIP Guest " + formattedName);
  }

  return invitationCards;
}

var dispatchResults = sendInvitations(vipGuests);
console.log("All Dispatch Log:", dispatchResults);
alert("System Update:\n" + dispatchResults.join("\n"));
