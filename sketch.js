// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
canvas=createCanvas(400,400);

ground= new Ground(200,380,400,40);

canonBall= new CanonBall(300,300,40,40);
}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
background(0);

ground.display();
canonBall.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}