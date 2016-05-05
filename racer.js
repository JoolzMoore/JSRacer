document.addEventListener('DOMContentLoaded', function() {
  console.log('hello');
  createEventListener();
}
)

function createEventListener() {
  document.addEventListener('keyup', function(e) {
      //if p or q key pressed
      if (e.which === 81) {
        updatePlayer('player1_strip');
      } else if (e.which === 80) {
        updatePlayer('player2_strip');
      }
  })
}

//update player
function updatePlayer(player) {
  //navigate/ traverse to player strip 1 or 2
  var strip = document.getElementById(player);
//define cell


  //set is found = false
  var isFound = false;
  //loop through children in row
  for (var i = 0; i < strip.children.length; i++) {

     var cell = strip.children [i];
    //if condition is = active

    //condition to know it is finished the game on teh last square


    //call the restart function if teh statement is true

    if (cell.className === "active") {
      //set is not active and is found is true
      cell className = "";
      //set it to true
      isfound = true;
      }
      //if the cell is not active and is found it is true
      else if (cell.className === "" && isFound) {
      //then make it active

      //reset as found
    }



    }

  }