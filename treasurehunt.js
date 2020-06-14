// these two lines generate a random location for the bomb and the treasure
var winCondition = Math.floor(Math.random()*9)
var loseCondition = Math.floor(Math.random()*9)
//makes sure bomb and treasure are not on the same location.
while (winCondition === loseCondition) {
  loseCondition = Math.floor(Math.random()*9)
}

//the amount of attempts the user has
var clicks = 8
  console.log(winCondition)
  console.log(loseCondition)

// var  = document.getElementsByTagName("td").innerHTML = `<img src='http://pngimg.com/uploads/cloud/cloud_PNG16.png' width="48px">`

//the game
const treasure = (location) =>{
  clicks = clicks - 1
  document.getElementById("counter").innerHTML = clicks
//Checks if user still has attempts, before going through the function.
  if (clicks !== 0){
    //If winCondition and treasure location ===, you win!
    if (location === winCondition) {
      document.getElementById(location).innerHTML = `<img src='http://pngimg.com/uploads/jeep/jeep_PNG82.png' width="48px">`
      alert("You won!")
      document.getElementById("grid").style.pointerEvents = "none";
      // console.log(winCondition)
      }
    //If loseCondition and bomb location ===, you lose...
    else if (location === loseCondition) {
      document.getElementById(location).innerHTML = `<img src='https://p1.pxfuel.com/preview/8/770/548/black-and-white-tunnel-light-smoke-people.jpg' height="48px" width="48px">`
      alert("Loser!")
      console.log(clicks)
      document.getElementById("grid").style.pointerEvents = "none";
      }
    //If you click neither the bomb or the treasure the game continues.
    else if (winCondition !== location && loseCondition !== location) {
      document.getElementById(location).innerHTML = `<img src= 'https://i0.pickpik.com/photos/607/614/559/dark-moody-scary-spooky-preview.jpg' width="48px" height="48px">`
      console.log(clicks)
      }
    }
  // If you run out of turns you lose.
  else if (clicks === 0) {
    alert ("You lose! You're lost in the woods forever. :(")
    document.getElementById("grid").style.pointerEvents = "none";
  }
}
