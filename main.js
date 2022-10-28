music1="";
music2="";
leftwristX=0;
rightwristX=0;
leftwristY=0;
rightwristX=0;

function preload(){
   
    music1=loadSound('Monody.mp3');
    music2=loadSound('Faded.mp3');
}

function setup(){

    canvas = createCanvas(600,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet=poseNet.on(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,400);
}
function modelLoaded(){
    console.log("PoseNet has been initialized!");
}

function gotPoses(){
    if(results.length>0){

        console.log(results);
        leftwristX = results[0].pose.leftwrist.x;
        leftwristY = results[0].pose.leftwrist.y;
        console.log("Left wrist's x: "+ leftwristx+ "left wrist's y: " + leftwristy);

        rightwristX = results[0].pose.rightwrist.x;
        rightwristY = results[0].pose.rightwrist.y;
        console.log("right wrist's x: "+ rightwristx+ "right wrist's y: " + rightwristy);
    }
}