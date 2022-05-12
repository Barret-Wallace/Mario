function preload() {
	world_start = loadSound("world_start.wav");
	coin2 = loadSound("coin.wav");
	kick = loadSound("kick.wav");
	jump = loadSound("jump.wav");
	death_mario = loadSound("mariodie.wav");
	gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("game");
	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("xbox");

	pose = ml5.poseNet(video, modelLoaded);
	pose.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("Guess what...Modal is Loaded!!!!!!!!!!!!!!!!!!!!!😀");
}
function gotPoses(result){
if(result.length > 0){
	console.log(result);
	noseX = result[0].pose.nose.x;
	noseY = result[0].pose.nose.y;
}
}
function draw() {
	game()
}
//parent is a function that helps us to place our canvas or video in the particular HTML Element
//Waveform Audio File Format (wav) an audio file format standard, developed by IBM and Microsoft, for storing an audio bitstream on PCs.




