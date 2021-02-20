Canvas = document.getElementById("MyCanvas");
Ctx = Canvas.getContext("2d");

RoverWidth = 100;
RoverHeight = 90;

NASAImages = ["NASA 1.jpg", "NASA 2.jpg", "NASA 3.jpg", "NASA 4.jpg"];
RandomNumber = Math.floor(Math.random() * 4);

BackgroundImage = NASAImages[RandomNumber];
RoverImage = "Rover.png";

RoverX = 10;
RoverY = 10;

function Add() {
    BackgroundImageTag = new Image();
    BackgroundImageTag.onload = uploadBackground;
    BackgroundImageTag.src = BackgroundImage;

    RoverImageTag = new Image();
    RoverImageTag.onload = uploadRover;
    RoverImageTag.src = RoverImage;
}

function uploadBackground() {
    Ctx.drawImage(BackgroundImageTag, 0, 0, Canvas.width, Canvas.height);
}

function uploadRover() {
    Ctx.drawImage(RoverImageTag, RoverX, RoverY, RoverWidth, RoverHeight);
}

window.addEventListener("keydown", MyKeyDown);

function MyKeyDown(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (KeyPressed == 37) {
        RoverLeft();
        console.log("Left Arrow");
    }
    if (KeyPressed == 38) {
        RoverUp();
        console.log("Up Arrow");
    }
    if (KeyPressed == 39) {
        RoverRight();
        console.log("Right Arrow");
    }
    if (KeyPressed == 40) {
        RoverDown();
        console.log("Down Arrow");
    }
}

function RoverLeft() {
    if (RoverX >= 10) {
        RoverX = RoverX - 10;
        console.log("Left Arrow Pressed")
        console.log("X = " + RoverX + " and Y = " + RoverY);
        uploadBackground();
        uploadRover();
    }
}

function RoverUp() {
    if (RoverY >= 10) {
        RoverY = RoverY - 10;
        console.log("Up Arrow Pressed")
        console.log("X = " + RoverX + " and Y = " + RoverY);
        uploadBackground();
        uploadRover();
    }
}

function RoverRight() {
    if (RoverX <= 700) {
        RoverX = RoverX + 10;
        console.log("Left Arrow Pressed")
        console.log("X = " + RoverX + " and Y = " + RoverY);
        uploadBackground();
        uploadRover();
    }
}

function RoverDown() {
    if (RoverY <= 500) {
        RoverY = RoverY + 10;
        console.log("Up Arrow Pressed")
        console.log("X = " + RoverX + " and Y = " + RoverY);
        uploadBackground();
        uploadRover();
    }
}