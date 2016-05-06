document.addEventListener('DOMContentLoaded', function() {
  console.log('hello');
  createEventListener();
})

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


  //loop through children in row
  for (var i = 0; i < strip.children.length; i++) {
    //call the restart function if the statement is true
    if (strip.children[i].className === "active") {
      //if cell is active we need to check if end of row
      if (i === strip.children.length -1) {
        console.log ("you won")
        return
      }
      //change class name to nothing
      strip.children[i].className = ""
        //changng class of the cell to active
      strip.children[i + 1].className = "active"
      break
    }

  }

}