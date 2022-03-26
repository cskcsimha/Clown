noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/T3pVw2Jv/Clown-Nose-Download-PNG-Image.png');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 300, 300);
    Fill(255, 0, 0)
    stroke(255, 0, 0)
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('Clown.png');
}

function modelLoaded(){
    console.log('modelLoaded')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("nosex="+noseX);
        console.log("nosey="+noseY);
    }
}