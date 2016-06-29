var colorArray = []; //initialize array of colors

//the constructor function for the colored boxes; takes in a color name for the div class attribute and a hexidecimal color for styling
function Box(color, hexDec) {
  this.color = color;
  this.hexDec = hexDec;
  colorArray.push(this);
}

//make the first four boxes
var box1 = new Box ("Red", "#C00000");
var box2 = new Box ("Yellow", "#FFFF66");
var box3 = new Box ("Blue", "#0066FF");
var box4 = new Box ("Pink", "#FF6699");

//add more pink boxes
var box5 = new Box ("Dark pink", "#CC0066");
var box6 = new Box ("Light pink", "#FFCCFF");

//jQuery
$(document).ready(function(){
  //appends boxes to the DOM via the colorArray array of box objects, and styles the box's background color with the hexidecimal value in the array
  for (var i = 0; i < colorArray.length; i++){
    $("#gameTime").append("<div class=\"" + colorArray[i].color + "\" style=\"background-color: " + colorArray[i].hexDec + "\"></div>");
  }

  //to obtain a random number to correspond with a box's array index
  var random = Math.floor(Math.random() * colorArray.length);
  console.log(random); //for cheating purposes

  //the game
  $("#gameTime").on("click", "div", function(){
    var boxClass = $(this).attr("class"); //to create a variable, because it's used multiple times
    if (boxClass === colorArray[random].color) { //if the class of the div matches the color at colorArray's random index...
      alert("Ay! Success! Ye conquered 'er! " + boxClass + " is ye olde color o' victory! Try ye luck on another quest!"); //success message
      random = Math.floor(Math.random() * colorArray.length); //creates new value for random
      console.log(random); //if you want to cheat!
    } else {
      alert("YE BE DAMNED"); //"failure" message
    }
  })
})
