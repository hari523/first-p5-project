function setup()
{
canvas = createCanvas(600,600);
canvas.position(150,150);
}

function preload()
{
    img = loadImage("https://i.postimg.cc/sgk6dxYQ/download-5.jpg");
}

function draw()
{
 image(img,10,10, 400,200);
 circle(200,200,70);
}