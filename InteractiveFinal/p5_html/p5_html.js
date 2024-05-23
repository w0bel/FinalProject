var capture;

function setup() {
createCanvas (windowWidth, windowHeight);

capture = createCapture(VIDEO);
capture.size(640,480);
}


function draw() {
image(capture, width / 2 - 320, height / 2 -240);

filter(POSTERIZE,map(mouseX,0,mouseY,2,15));


}
