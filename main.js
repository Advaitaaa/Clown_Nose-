function preload(){
    clown_nose=loadImage("https://i.postimg.cc/s2Z1qsXw/clown-nose.png")
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);   //on function is used to start excuting the poseNet// 
}
function modelLoaded()
{
    console.log("poseNet is loaded");

}

function draw() 
{
    image(video, 0, 0, 300, 300)       //Used to load the image// 
    //option 1 to draw the clown nose using the circle 
    // circle(nose_x,nose_y,20)       
    // fill(255,0,0);
    // stroke(255,0,0);

    //option 2 to draw the clown nose by uploading the image 
    image(clown_nose,nose_x,nose_y,30,30);
}

function take_snapshot()
{
    save("myfilterImage.png");
}
nose_x=0;
nose_y=0;


function gotPoses(results)
{
    if (results.length >0)
    {
        console.log(results)
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x value = "+nose_x);
        console.log("nose y value = "+nose_y);
    }

}
