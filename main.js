song = ""
song2 = ""

leftwristX = ""
leftwristY = ""
rightwristX = ""
rightwristY = ""
function preload(){
song = loadSound("music.mp3")
song2 = loadSound("music2.mp3")
}
function setup(){
    drawingBoard = createCanvas(450, 400)
    drawingBoard.position(425,160)

    video = createCapture(VIDEO)
    video.hide()

    posesssssssssss = ml5.poseNet(video, modelLoaded)
    posesssssssssss.on("pose", MyPoses)
}

function modelLoaded(){
    console.log("Model Has Loadeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
}

function MyPoses(results){
    if(results.length>0){
        console.log(results)
        leftwristX = results[0].pose.leftWrist.x
        leftwristY = results[0].pose.leftWrist.y
        rightwristX = results[0].pose.rightWrist.x
        rightwristY = results[0].pose.rightWrist.y
    }
}
function draw(){
    image(video, 0, 0, 450, 400)
}