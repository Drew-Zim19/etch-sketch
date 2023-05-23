/*
This is the javascript which will make the buttons clear the sketch, prompt the user to re-size the grid and make the pen feature work on mouse hover
Algorithm breakdown

1. When user hovers over the squares in the sketch pad, change the color to black
2. When user clicks the clear button on top, it will clear the pad of the color and return the pad to white
3. When user clicks re-size button, it will prompt the user for an input box which will allow a number between 16 and 100. This is the number of pixels the sketch box will become. I.E. 16x16 is 16 squares across and down. 100x100 is 100 across and 100 down
*/

//First let's create the grid and define it with the user input box for pixels

const body = document.body;
let pixelValue = '';

document.getElementById("pixelButton").addEventListener("click", () => {
pixelValue = document.getElementById("pixelsForm").value;
changeGridPixels(pixelValue);
});

function changeGridPixels (pixelValue){
    console.log(pixelValue);
}