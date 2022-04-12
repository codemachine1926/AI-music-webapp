function setup() {
    canvas = createCanvas(450,350);
    canvas.position(400,190);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,450,350);
}