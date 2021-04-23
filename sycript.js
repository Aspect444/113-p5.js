function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(550, 200);
    video = createCapture(VIDEO)
    video.hide();
}

function draw(){
    image(video, 100, 100, 300, 300);

    fill(0, 0, 128);
    stroke(0, 0, 128);
    rect(50, 430, 400, 20);

    fill(0, 0, 128);
    stroke(0, 0, 128);
    rect(50, 50, 400, 20);

    fill(0, 0, 128);
    stroke(0, 0, 128);
    rect(50, 50, 20, 400);

    fill(0, 0, 128);
    stroke(0, 0, 128);
    rect(430, 50, 20, 400);

    fill(255, 255, 255);
    stroke(255, 255, 255);
    circle(50, 50, 80);

    fill(255, 255, 255);
    stroke(255, 255, 255);
    circle(450, 50, 80);

    fill(255, 255, 255);
    stroke(255, 255, 255);
    circle(450, 450, 80);

    fill(255, 255, 255);
    stroke(255, 255, 255);
    circle(50, 450, 80);
}