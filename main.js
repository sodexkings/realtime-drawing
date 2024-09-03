function setup(){
    video = createCapture (VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet =ml5.poseNet(VIDEO,modelLoaded);
    poseNet.on('pose', gotposes)
}

function draw() {
    background('#FF0000');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!')
}

function gotposes(results){
    if(results.length > 0)
    {
        console.log(results)
    }
}



