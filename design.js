/**
pointerIsDown is a variable that is used to paint instead of
just clicking the squares; it checks to see if the mouse is currently
clicked down and if so, changes the color.
*/
var pointerIsDown = false;
document.body.addEventListener('pointerdown', function() {
  pointerIsDown = true;
});
document.body.addEventListener('pointerup', function() {
  pointerIsDown = false;
});
document.body.addEventListener('pointercancel', function() {
  pointerIsDown = false;
}); // this event caused a glitch

/**
determineWidth figures out the max size the squares can be in the page
*/
var determineWidth = function() {
  var pageWidth = window.outerWidth;
  var gridWidth = document.getElementById("width").value;
  var maxWidth = pageWidth / gridWidth; // the widest the pixels can be
  var pageHeight = window.outerHeight;
  var gridHeight = document.getElementById("height").value;
  var maxHeight = (pageHeight * 0.7) / gridHeight; // the tallest they can be
  var pixelSide = 0;
  if (maxWidth > maxHeight) {
    pixelSide = maxHeight;
  } else {
    pixelSide = maxWidth;
  }; // makes the pixels as large as possible while keeping them square
  pixelSide -= 2; // accounts for the one pixel border
  return pixelSide;
}

/**
Changes the color when clicked. The border is also changed in order to remove
the initial visible border.
*/
var changePixelColor = function(newPixel) {
    currentColor = document.getElementById("color").value;
    newPixel.style.backgroundColor = currentColor;;
    newPixel.style.border = "1px solid " + currentColor;
}

/**
If the mouse is clicked, this uses the mouseover event to change the color
*/
var paintColor = function(newPixel) {
  if (pointerIsDown) {
    currentColor = document.getElementById("color").value;
    newPixel.style.backgroundColor = currentColor;;
    newPixel.style.border = "1px solid " + currentColor;
  }
}

var createGridPixel = function(thisRow, pixelSide) {
  const newPixel = document.createElement("div");
  newPixel.classList.add("pixel");
  newPixel.style.width = (pixelSide) + "px";
  newPixel.style.height = (pixelSide) + "px";
  newPixel.addEventListener('mouseover', function() {
    paintColor(newPixel);
  })
  newPixel.addEventListener('mousedown', function() {
    changePixelColor(newPixel);
  })
  thisRow.appendChild(newPixel);
}

var createNewRow = function() {
  const newRow = document.createElement("div");
  newRow.classList.add("row");
  const grid = document.getElementById("grid");
  grid.appendChild(newRow);
  return newRow;
}

var generateGrid = function() {
 var gridHeight = document.getElementById("height").value;
 var gridWidth = document.getElementById("width").value;
 const currentGrid = document.getElementById("grid");
 currentGrid.textContent = ''; // resets to a blank grid before remaking it
 var pixelSide = determineWidth();
 for (var x = 1; x <= gridHeight; x++) {
   var thisRow = createNewRow(); //creates the next row of the grid
   for (var y = 1; y <= gridWidth; y++) {
     createGridPixel(thisRow, pixelSide); //creates each pixel of the row
   }
 }
}

var gridButton = document.getElementById("submit");
gridButton.addEventListener('click', function() {
  generateGrid()
});
