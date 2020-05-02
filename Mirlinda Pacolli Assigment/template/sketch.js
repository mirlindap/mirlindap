var firstRectVerticalPossition = 250;
var secondRectVerticalPossition = 250;
var ballSize = 40;


//The setup function only happens once
function setup() {
    createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {

    background(173, 216, 230); //an RGB color for the canvas' background
    //circle
    stroke(255, 255, 127) // an RGB color for the circle's border
    fill(255, 0, 0, 150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
    ellipse(mouseX, mouseY, ballSize, ballSize); // center of canvas, 20px dia

    // First rectangle
    stroke(255, 255, 127); // Color of first rectangle border
    fill(255, 0, 127, 150); // Color of first rectangle
    rect(firstRectVerticalPossition, 450, 100, 30); // Possition of first rectangle

    // Second Rectangle
    stroke(255, 255, 127); // Color of second rectangle border
    fill(25, 20, 111, 150); // Color of second rectangle
    rect(secondRectVerticalPossition, 30, 100, 30); // Possition of second rectangle

    // Text
    stroke(255, random(255), 127); // Color of first rectangle border
    fill(255, random(255), 127, 150);
    textSize(26);
    textFont("Georgia");
    textStyle(ITALIC);
    text("Linda", 10, 30);


}

function mousePressed(){

// Increase ballSize 
	if(ballSize < 80){ // Check if ballSize is biger than 80
		ballSize = ballSize + 5;
	}
}



function keyPressed() {
    if (keyCode === 39) { // excecute when -> key is pressed
        if (firstRectVerticalPossition < 400) { // check if is on the right edge
            firstRectVerticalPossition = firstRectVerticalPossition + 15;
        }
    } else if (keyCode === 37) { // excecute when <- key is pressed
        if (firstRectVerticalPossition > 0) { // check if is on the left edge
            firstRectVerticalPossition = firstRectVerticalPossition - 15;
        }
    } else if (keyCode == 68) { // excecute when A key is pressed
        if (secondRectVerticalPossition < 400) {
            secondRectVerticalPossition = secondRectVerticalPossition + 15;
        }
    } else if (keyCode == 65) { // excecute when D key is pressed
        if (secondRectVerticalPossition > 0) {
            secondRectVerticalPossition = secondRectVerticalPossition - 15;
        }
    }
}
