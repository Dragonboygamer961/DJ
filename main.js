sound = "";

function perload(){
    sound = loadSound("music.mp3");
}

function setup(){

    canvas = createCanvas(250, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
 image(video, 0,0, 250,250);
}

function PLAY_MUSIC() {
    
    sound.play();
}
