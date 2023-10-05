song1="";
song2="";

function preload(){
    song =loadSound("ETA.mp3");
    song =loadSound("supido.mp3");
}

function setup(){
    canvas= createCanvas(500,500)
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("PoseNet has been successfully initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        scoreRightWrist =  results[0].pose.keypoints[10].score;
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("leftwristX = " + leftwristX + " leftwristY = " + leftwristY);
        console.log("rightwristX = " + rightwristX + " rightwristY = " + rightwristY);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
    }
}