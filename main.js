statuss = "";

function preload()
{
  
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380 , 380);
    video.hide();
    
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

    var value = document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("Model is loaded");
    statuss = true;
}

function draw()
{
    image(video, 0 , 0 , 480 , 380);
}