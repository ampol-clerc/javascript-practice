// 99 Bottles Song Function

function songOfBeer() {
    var numberOfBottles = 99;

    while (numberOfBottles > 0) {
      var bottleWord = "bottles";
      if (numberOfBottles === 1) {
        bottleWord = "bottle";
      }
      
      console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord + " of beer.");

      numberOfBottles--;
      
      var nextBottleWord = "bottles";
      if (numberOfBottles === 1) {
        nextBottleWord = "bottle";
      }

      if (numberOfBottles > 0) {
        console.log("Take one down and pass it around, " + numberOfBottles + " " + nextBottleWord + " of beer on the wall.\n");
      } else {
        console.log("Take one down and pass it around, no more bottles of beer on the wall.\n");
      }
    }
  }

songOfBeer();