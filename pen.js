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
let divBackgroundColor = 'white';
//function below grabs input from the form to get number of pixels

document.getElementById("pixelButton").addEventListener("click", () => {
pixelValue = document.getElementById("pixelsForm").value;
if(pixelValue > 100 || pixelValue < 10){
    alert("Number of Pixels must be between 10 and 100.")
} else{
changeGridPixels(pixelValue);
}
});

//create the grid variable to manipulate for the sketch pad
const grid = document.querySelector('.grid-container');


//function changeGridPixels changes the number of pixels in the grid

function changeGridPixels (pixelValue){
    let square = pixelValue;
    /*grid.setAttribute('style', `grid-template-columns: repeat(${square}, 1fr);`);
    grid.setAttribute('style', `grid-template-rows: repeat(${square}, 1fr);`);
    */
    grid.setAttribute('style', `grid-template-columns: repeat(${square}, 1fr); grid-template-rows: repeat(${square}, 1fr);`);

   for (let i = 0; i < square * square; i++){
        const div = document.createElement('div');
        div.classList.add('gridSquare');
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = penColor(divBackgroundColor);
    });
    grid.appendChild(div);
   }
}

//clear button to remove all color and make divs white

document.getElementById('clearButton').addEventListener('click', () => {
        let nodeList = document.querySelectorAll(".gridSquare");
        for(let i = 0; i < nodeList.length; i++){
            nodeList[i].style.backgroundColor = 'white';
        }
        
});

//toggle button logic for div background color

let isSwitched = false;

document.getElementById('switch').addEventListener('click', () => {
    if(isSwitched == false){
        isSwitched = true;
    } else if(isSwitched == true){
        isSwitched = false;
    }
});

//random RGB color generator

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
//penColor function to return a color for a given div

function penColor (divBackgroundColor){
    if(isSwitched == true){
        divBackgroundColor = getRandomRgb();
    }
    else {
        divBackgroundColor = 'black';
    }
    return divBackgroundColor;
}